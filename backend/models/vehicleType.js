const mongoose = require("mongoose");
const VehicleTypeSchema = mongoose.Schema({
  name: String,
  wheels: Number,
  models: [String],
});
module.exports = mongoose.model("vehicleType", VehicleTypeSchema);
