const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming requests with JSON payloads


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit process with failure
    }
  };

  // Call the connectDB function
connectDB();


// Sample route
app.get('/', (req, res) => {
    res.send('API is running...');
  });


  // Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});