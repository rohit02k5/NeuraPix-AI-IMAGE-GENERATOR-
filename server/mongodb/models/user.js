import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coins: { type: Number, default: 0 },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
