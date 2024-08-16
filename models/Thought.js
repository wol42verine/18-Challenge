// models/Thought.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString()
  }
});

const ThoughtSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [ReactionSchema]
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

module.exports = mongoose.model('Thought', ThoughtSchema);