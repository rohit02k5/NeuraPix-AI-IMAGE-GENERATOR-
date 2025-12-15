# 🌌 NeuraPix — AI Image Generation & Community Platform

> **A premium, full-stack AI product showcasing real-world system design, scalable architecture, and polished UX.**
> *Where creativity meets intelligence.*

---

## 🧠 What is NeuraPix?

**NeuraPix** is a **production-ready AI image generation platform** that allows users to transform natural language prompts into high-quality visuals using **Stable Diffusion XL**, while participating in a **gamified creative community**.

Unlike basic demo projects, NeuraPix focuses on **end-to-end engineering**:

* Secure authentication
* Scalable backend APIs
* Cloud-based image handling
* Community-driven engagement mechanics
* Premium UI/UX inspired by modern AI startups

This project is designed to demonstrate **industry-level full-stack and AI integration skills**.

---

## ✨ Core Features

### 🎨 AI-Powered Image Generation

* **Text-to-Image using Stable Diffusion XL** (via Stability AI)
* High-fidelity, cinematic image outputs
* "Surprise Me" prompt system to encourage creativity
* Optimized prompt handling and error-safe generation flow

---

### 🌍 Community & Social Layer

* **Community Showcase**: Public gallery of shared AI-generated artwork
* **Search & Explore**: Browse community creations with smooth UI performance
* **Personal Gallery**: Private, user-specific image collection

---

### 🎮 Gamification System

* **Coin Economy**: Users earn **coins for sharing creations publicly**
* **Leaderboard**: Real-time ranking of top creators
* **Engagement-Driven Design**: Encourages repeated usage and community growth

---

### 🔐 Authentication & Security

* Secure **Login / Signup** system
* **JWT-based authentication** with session persistence
* **Password hashing with bcrypt**
* Protected routes for private galleries and generation actions

---

### 💎 Premium UI / UX Design

* **Neural Glassmorphism aesthetic**
* Cyberpunk-inspired **neon color palette** (Blue • Purple • Pink)
* Animated backgrounds with **dynamic node networks**
* Smooth hover states and micro-interactions
* Fully **responsive** across desktop, tablet, and mobile

---

## 🖼️ Application Screenshots

> *(Replace placeholders below with actual screenshots from your app)*

<img width="1893" height="904" alt="Screenshot 2025-12-15 233004" src="https://github.com/user-attachments/assets/c2e6d04e-67e7-4c01-8f86-2b469c63119b" />

<img width="1871" height="904" alt="image" src="https://github.com/user-attachments/assets/8b652bef-449e-40fb-8db2-3306b33e3d7e" />

<img width="1919" height="911" alt="Screenshot 2025-12-15 233331" src="https://github.com/user-attachments/assets/c6d96e28-7e47-4e36-af16-247e3962b686" />

<img width="1919" height="898" alt="Screenshot 2025-12-15 234106" src="https://github.com/user-attachments/assets/dc5ef500-b02c-4973-a48e-73aff49a67b5" />

<img width="1919" height="897" alt="Screenshot 2025-12-15 233141" src="https://github.com/user-attachments/assets/b2b234fc-9b2c-47eb-a725-2fe0fdd3de24" />

<img width="1919" height="911" alt="Screenshot 2025-12-15 233217" src="https://github.com/user-attachments/assets/cbc33ff5-a374-49ec-b086-023da0142994" />

<img width="1919" height="901" alt="Screenshot 2025-12-15 233157" src="https://github.com/user-attachments/assets/bb283317-5b84-4cf0-9721-75b563a25cd3" />

---

## 🏗️ System Architecture (Recruiter Focused)

### High-Level Flow

```
User → React Frontend → Express API → Stability AI
                    → Cloudinary → MongoDB
```

### Key Engineering Decisions

* **Separation of Concerns**: Clear split between client, server, and external services
* **Modular Backend**: Routes, controllers, and models structured for scalability
* **Stateless Auth**: JWT-based authentication suitable for horizontal scaling
* **Cloud-Native Assets**: Images stored and optimized via Cloudinary
* **Environment-Safe Config**: Production & development configs via `.env`

---

## 🛠️ Tech Stack

| Layer                | Technologies                                           |
| -------------------- | ------------------------------------------------------ |
| **Frontend**         | React (Vite), Tailwind CSS, Framer Motion, Context API |
| **Backend**          | Node.js, Express.js                                    |
| **Database**         | MongoDB, Mongoose                                      |
| **AI Engine**        | Stability AI (Stable Diffusion XL)                     |
| **Image Hosting**    | Cloudinary                                             |
| **Auth & Security**  | JWT, bcryptjs                                          |
| **Deployment Ready** | Render / Vercel compatible                             |

---

## ⚡ Getting Started (Local Setup)

### Prerequisites

* Node.js (v14+)
* MongoDB Atlas
* Cloudinary Account
* Stability AI API Key

---

### 🔧 Backend Setup

```bash
cd server
npm install
```

Create `.env` in `/server`:

```env
PORT=8080
MONGODB_URL=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STABILITY_API_KEY=your_stability_api_key
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

---

### 🎨 Frontend Setup

```bash
cd client
npm install
```

Create `.env` in `/client`:

```env
VITE_SERVER_URL=http://localhost:8080/api/v1
```

Run frontend:

```bash
npm run dev
```

---

## 🚀 Why This Project Stands Out

✔ Not a tutorial clone — **designed like a real product**
✔ Demonstrates **AI API integration at scale**
✔ Shows **secure authentication & backend design**
✔ Highlights **UX sensibility and frontend polish**
✔ Built with **deployment & maintainability in mind**

This project reflects how I approach software engineering: **clean architecture, user-centric design, and production readiness**.

---

## 🔮 Future Enhancements

* Image upscaling & variations
* Likes, comments, and remix prompts
* Creator profiles & social graph
* Stripe-based subscription & credits system

---

## 👨‍💻 Author

**Rohit**
B.Tech Electrical Engineering, IIT Bhilai
AI • Full-Stack • Systems-Oriented Developer

📫 *Feel free to connect — I’m always open to impactful opportunities.*

---

⭐ If you found this project impressive, consider starring the repository!
