const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Required for MongoDB connection
const session = require("express-session");

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON request bodies

app.use(
    session({
      secret: process.env.SESSION_SECRET,  // Fetch secret from environment variables
      resave: false,                      // Don't save session if not modified
      saveUninitialized: true,            // Save session even if it is not initialized
    })
  );

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Call the connectDB function to connect to the database
connectDB();

// Routes
app.get("/", (req, res) => res.send("Backend is Running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));