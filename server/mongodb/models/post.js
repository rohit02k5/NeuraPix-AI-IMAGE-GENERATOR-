import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isPublic: { type: Boolean, default: false },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;