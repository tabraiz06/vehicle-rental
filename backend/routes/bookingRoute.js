const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
router.post("/book", async (req, res) => {
  const {
    firstName,
    lastName,
    vehicleName,
    vehicleModel,
    vehicleType,
    startDate,
    endDate,
    quantity,
  } = req.body;

  // Check for overlapping bookings
  const overlappingBooking = await Booking.findOne({
    vehicleName,
  });
  if (overlappingBooking) {
    if (overlappingBooking.startDate === startDate) {
      res
        .status(400)
        .json({ message: "Vehicle is already booked for the selected dates" });
    } else if (overlappingBooking.endDate === endDate) {
      res.status(400).json({
        message: "Vehicle is already booked for the selected end dates",
      });
    }
  } else {
    const booking = new Booking({
      firstName,
      lastName,
      vehicleName,
      vehicleModel,
      vehicleType,
      startDate,
      endDate,
      quantity,
    });
    await booking.save();

    res.status(201).json({ message: "Booking successful" });
  }
});
module.exports = router;
