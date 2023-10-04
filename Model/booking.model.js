const mongoose = require("mongoose");

const bookingModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "user name must be non-empty"],
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
    required: [true, "movies field must be non-empty"],
  },
  booking_date: {
    type: Date,
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "enter the valid date",
    },
  },
  adults: {
    type: Number,
    required: [true, "adults field must be non-empty"],
    min: [1, "count of adult must be at least one"],
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "enter the valid date",
    },
  },
  children: {
    type: Number,
    required: [true, "children field must be non-empty"],
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "enter the valid date",
    },
  },
  payment: {
    amount: {
      type: Number,
      required: [true, "amount field must be non-empty"],
    },
    method: {
      type: String,
      enum: ["PayPal", "Credit Card", "Paytm", "PhonePe"],
      required: [true, "children field must be non-empty"],
    },
  },
  status: {
    type: String,
    required: [true, "status field must be non-empty"],
  },
});

module.exports = mongoose.model("booking", bookingModel);
