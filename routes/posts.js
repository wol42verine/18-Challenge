// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Other routes like GET, PUT, DELETE...

module.exports = router;
