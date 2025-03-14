// server/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/api/profile", (req, res) => {
  const mockProfile = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Adventure awaits, let's see where love takes us!",
  };
  res.json(mockProfile);
});

// Simple matchmaking route
app.get("/api/matches", (req
