import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

// Configure CORS to allow requests from localhost:5173
app.use(
  cors({
    origin: 'http://localhost:5173',  // Allow requests from this domain (your frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json({ limit: '50mb' }));

// Define routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/huggingface', dalleRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from Hugging Face Stable Diffusion!',
  });
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.error(error);
  }
};

startServer();
