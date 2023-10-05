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
  },
  zip_code: {
    type: Number,
    required: [true, "theatre's zip code must be non-empty"],
    validate: {
      validator: function (v) {
        return v >= 10000 && v <= 99999;
      },
      message: "theatre's zip code must be of length 5.",
    },
  },
  capacity: {
    type: Number,
    required: [true, "theatre address must be non-empty"],
  },
  theatre_code : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model("theatre", theatreModel);
