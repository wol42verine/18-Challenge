// models/Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Add more fields as needed
});

module.exports = mongoose.model('Post', PostSchema);
