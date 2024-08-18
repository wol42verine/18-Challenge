// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Thought = require('../models/Thought'); // Updated
const mongoose = require('mongoose'); // Add this line

//Get users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Add a friend
router.post('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send();
    }
    const friendId = new mongoose.Types.ObjectId(req.params.friendId);
    user.friends.push(req.params.friendId);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Remove a friend
router.delete('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send();
    }
    user.friends.pull(req.params.friendId);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Update a thought
router.put('/thoughts/:id', async (req, res) => { // Updated
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!thought) {
      return res.status(404).send();
    }
    res.status(200).send(thought);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Delete a thought
router.delete('/thoughts/:id', async (req, res) => { // Updated
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).send();
    }
    res.status(200).send(thought);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;