require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { 
    console.log("MongoDB Connected");
}).catch(err => console.error("MongoDB Connection Error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: String,
  city: String,
  state: String,
  interests: [String],
  participationLevel: String,
  communicationPreferences: [String],
  cityCouncilDistrict: String,
  neighborhood: String,
  skills: [String],
  aadharHash: String,
  phone: String,
  isVerified: { type: Boolean, default: false }
});

// Prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);

// GET request: Check if email exists
app.get("/api/users/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (user) return res.status(200).json(user);
        res.status(404).json({ message: "User not found" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST request: Register user
app.post("/api/users", async (req, res) => {
    try {
        const { firstName, lastName, email, password, city, state, interests } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ error: "Email already registered" });

        const newUser = new User({ firstName, lastName, email, password, city, state, interests });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
});

// PUT request: Update civic interests
app.put("/api/users/:email/civic-interests", async (req, res) => {
    const { email } = req.params;
    const { interests, participationLevel, communicationPreferences, cityCouncilDistrict, neighborhood, skills } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { interests, participationLevel, communicationPreferences, cityCouncilDistrict, neighborhood, skills },
            { new: true, upsert: true } // Upsert allows creation if user doesn't exist
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to update user interests" });
    }
});

const hashAadhar = (aadhar) => {
  return crypto.createHash("sha256").update(aadhar).digest("hex");
};

// Aadhar Verification Endpoint
app.post("/api/users/:email/verify", async (req, res) => {
  const { email } = req.params;
  const { aadhar, phone } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      user.aadharHash = aadhar;  // Storing Aadhar directly (No bcrypt)
      user.phone = phone;
      user.isVerified = true;
      await user.save();

      return res.status(200).json({ message: "Verification successful" });
  } catch (error) {
      console.error("Verification Error:", error); // Log full error
      return res.status(500).json({ error: "Verification failed", details: error.message });
  }

});


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
