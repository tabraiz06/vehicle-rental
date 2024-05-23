// backend/seed.js
const mongoose = require("mongoose");

const VehicleType = mongoose.model(
  "VehicleType",
  new mongoose.Schema({ name: String, wheels: Number, models: [String] })
);

const seedDatabase = async () => {
  await VehicleType.deleteMany({});

  const vehicleTypes = [
    { name: "Hatchback", wheels: 4, models: ["Model X", "Model Y"] },
    { name: "SUV", wheels: 4, models: ["Model Z", "Model A"] },
    { name: "Sedan", wheels: 4, models: ["Model B", "Model C"] },
    { name: "Cruiser", wheels: 2, models: ["Model D", "Model E"] },
  ];

  await VehicleType.insertMany(vehicleTypes);
  console.log("Database seeded!");
};

module.exports = { seedDatabase };
