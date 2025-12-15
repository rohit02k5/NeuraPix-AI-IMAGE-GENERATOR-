import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

import User from '../mongodb/models/user.js';

router.route('/').get(async (req, res) => {
  try {
    const { user, public: isPublic } = req.query;

    let query = {};
    if (user) {
      query.user = user; // Private gallery: fetch posts by user
    } else {
      // Feed: fetch public posts AND legacy posts (missing isPublic)
      // Feed: fetch public posts AND legacy posts (missing isPublic)
      query.$or = [
        { isPublic: true },
        { isPublic: { $exists: false } },
        { isPublic: null }
      ];
    }

    const posts = await Post.find(query).populate('user', 'name');
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo, userId, isPublic } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
      user: userId,
      isPublic: isPublic || false,
    });

    // Gamification: Award 10 coins if public
    if (isPublic && userId) {
      await User.findByIdAndUpdate(userId, { $inc: { coins: 10 } });
    }

    // Add post to user's post list
    if (userId) {
      await User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } });
    }

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;