const express = require("express");
const bookingController = require("../Controllers/booking.controller");
const router = express.Router();

router.post("/addNewBooking", bookingController.addNewBooking);
router.get("/bookingList", bookingController.bookingList);
router.get("/specificBooking/:id", bookingController.getSpecificBooking);
router.put("/updateBooking/:id", bookingController.updateBooking);
router.delete("/deleteBooking/:id", bookingController.deleteBooking);

module.exports = router;