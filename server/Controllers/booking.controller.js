const bookingModel = require("../Model/booking.model");

// add a new booking
exports.addNewBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    const newBooking = await bookingModel.create({
      user: bookingData.user,
      movie: bookingData.movie,
      theatre: bookingData.theatre,
      booking_date: bookingData.booking_date,
      time_slot: bookingData.time_slot,
      adults: bookingData.adults,
      children: bookingData.children,
      payment: bookingData.payment,
      status: bookingData.status,
    });

    res.status(200).send(newBooking);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// booking list
exports.bookingList = async (req, res) => {
  try {
    const bookings = await bookingModel.find();
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// getting specific booking
exports.getSpecificBooking = async (req, res) => {};

// edit booking
exports.updateBooking = async (req, res) => {
  try {
    const bookingID = req.params.id;
    const requestedChanges = req.body;

    if (Object.keys(requestedChanges).length === 0) {
      return res.status(409).send({ message: "Nothing to change" });
    }

    const updatedBooking = await bookingModel.findOneAndUpdate(
      { _id: bookingId },
      requestedChanges,
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).send({ message: "Booking not found" });
    }

    res.status(200).send({ message: "Booking updated successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// delete the booking
exports.deleteBooking = async (req, res) => {
  try {
    const bookingID = req.params.id;
    const deletedBooking = await bookingModel.findOneAndDelete({
      _id: bookingID,
    });

    if (!deletedBooking) {
      return res.status(404).send({ message: "Booking is not found." });
    }

    res.status(200).send({ message: "Booking deleted successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
