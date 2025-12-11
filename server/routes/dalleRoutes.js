// server/routes/dalleRoutes.js
import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch"; // or global fetch in newer Node

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ success: false, message: "Missing prompt" });

    const engine = process.env.STABILITY_ENGINE || "stable-diffusion-xl-1024-v1-0";
    const url = `https://api.stability.ai/v1/generation/${engine}/text-to-image`;

    // Build request body (adjust size, steps, samples as you like)
    const body = {
      text_prompts: [{ text: prompt, weight: 1 }],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      samples: 1,
      steps: 30
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.STABILITY_API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json" // or "image/png" if you prefer a raw png
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      console.error("Stability API error:", resp.status, txt);
      return res.status(502).json({ success: false, message: "Stability API error", details: txt });
    }

    // Two common responses:
    // 1) JSON containing artifacts with base64 content
    // 2) direct binary image if Accept: image/png
    const contentType = resp.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await resp.json();
      const artifact = json?.artifacts?.[0] ?? null;
      if (!artifact) {
        console.error("No artifact in Stability response", json);
        return res.status(502).json({ success: false, message: "No image returned", details: json });
      }
      const b64 = artifact.base64 || artifact.b64 || artifact.base64_image || null;
      if (!b64) return res.status(200).json({ success: true, photo: artifact });

      const dataUrl = `data:image/png;base64,${b64}`;
      return res.status(200).json({ success: true, photo: dataUrl });
    } else if (contentType.includes("image/png")) {
      const arrayBuffer = await resp.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const dataUrl = `data:image/png;base64,${buffer.toString("base64")}`;
      return res.status(200).json({ success: true, photo: dataUrl });
    } else {
      // fallback: return raw text
      const txt = await resp.text();
      return res.status(200).json({ success: true, photo: txt });
    }
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ success: false, message: err.message || "Server error" });
  }
});

export default router;
