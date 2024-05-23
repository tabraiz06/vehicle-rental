const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
router.post("/book", async (req, res) => {
  const {
    firstName,
    lastName,
    wheels,
    model,
    vehicle,
    startDate,
    endDate,
    quantity,
  } = req.body;

  // Check for overlapping bookings
  const overlappingStartDate = await Booking.findOne({
    startDate,
  });
  const overlappingEndDate = await Booking.findOne({
    endDate,
  });

  if (overlappingStartDate) {
    res
      .status(400)
      .json({ message: "Vehicle is already booked for the selected dates" });
  } else if (overlappingEndDate) {
    res.status(400).json({
      message: "Vehicle is already booked for the selected end dates",
    });
  } else {
    const booking = new Booking({
      firstName,
      lastName,
      wheels,
      model,
      vehicle,
      startDate,
      endDate,
      quantity,
    });
    await booking.save();

    res.status(201).json({ message: "Booking successful" });
  }
});
module.exports = router;
