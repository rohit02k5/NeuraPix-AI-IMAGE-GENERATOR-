import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Signup Route
router.route('/signup').post(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET || 'test_secret', { expiresIn: '1h' });

        res.status(201).json({ success: true, user: { id: newUser._id, name: newUser.name, email: newUser.email, coins: newUser.coins }, token });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
    }
});

// Login Route
router.route('/login').post(async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET || 'test_secret', { expiresIn: '1h' });

        res.status(200).json({ success: true, user: { id: existingUser._id, name: existingUser.name, email: existingUser.email, coins: existingUser.coins }, token });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
});

export default router;
