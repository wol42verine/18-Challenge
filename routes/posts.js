// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Update a post
router.put('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Delete a post
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;