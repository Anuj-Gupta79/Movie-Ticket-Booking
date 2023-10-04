const mongoose = require("mongoose");

const theatreModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "theatre's name must be non-empty"],
  },
  address: {
    type: String,
    required: [true, "theatre's address must be non-empty"],
  },
  city: {
    type: String,
    required: [true, "theatre's city must be non-empty"],
  },
  state: {
    type: String,
    required: [true, "theatre's state must be non-empty"],
  },
  zip_code: {
    type: Number,
    required: [true, "theatre's zip code must be non-empty"],
    validate: {
      validator: function (v) {
        return v >= 100000 && v <= 99999;
      },
      message: "theatre's zip code must be of length 5.",
    },
  },
  capacity: {
    type: Number,
    required: [true, "theatre address must be non-empty"],
  },
});

module.exports = mongoose.model("theatre", theatreModel);
