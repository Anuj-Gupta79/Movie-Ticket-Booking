const mongoose = require("mongoose");

const showTimeModel = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatre",
  },
  start_date: {
    type: Date,
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "enter the valid date",
    },
  },
  end_date: {
    type: Date,
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "enter the valid date",
    },
  },
  adults_price: {
    type: Number,
    required: [true, "Price for the movie must be non-empty"],
  },
  children_price: {
    type: Number,
    required: [true, "Price for the movie must be non-empty"],
  },
});

module.exports = mongoose.model("showtime", showTimeModel);
