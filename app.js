// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Routes
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts'); // Updated

app.use('/api', userRoutes);
app.use('/api', thoughtRoutes); // Updated

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});