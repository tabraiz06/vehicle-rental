const express = require("express");
const VehicleType = require("../models/vehicleType");
const router = express.Router();
router.get("/vehicle-types", async (req, res) => {
  const types = await VehicleType.find();
  res.json(types);
});
module.exports = router;
