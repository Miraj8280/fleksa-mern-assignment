const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

/* CONNECT TO MONGODB */
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

/* START THE SERVER */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
