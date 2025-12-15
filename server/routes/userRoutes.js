import express from 'express';
import User from '../mongodb/models/user.js';

const router = express.Router();

// Get Leaderboard
router.route('/leaderboard').get(async (req, res) => {
    try {
        // Fetch top 50 users sorted by coins descending
        const leaderboard = await User.find({}, 'name coins')
            .sort({ coins: -1 })
            .limit(50);

        res.status(200).json({ success: true, data: leaderboard });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Fetching leaderboard failed' });
    }
});

export default router;
