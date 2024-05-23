// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const VehicleRoute = require("./routes/vehicleRoute");
const bookingRoute = require("./routes/bookingRoute");
const { seedDatabase } = require("./seed");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vehicleRental");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to the database");
  seedDatabase();
});

// Routes
app.use("/api", VehicleRoute);

app.use("/api", bookingRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
