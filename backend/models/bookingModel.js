const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  wheels: String,
  vehicle: String,
  model: String,
  quantiy: Number,
  startDate: String,
  endDate: String,
});
module.exports = mongoose.model("booking", bookingSchema);
