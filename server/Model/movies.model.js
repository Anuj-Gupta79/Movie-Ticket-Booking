const mongoose = require("mongoose");

const moviesModel = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: [true, "this movie is already listed!"],
    required: [true, "movie name must be non-empty"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "movie description must be non-empty"],
  },
  release_date: {
    type: Date,
    require: [true, "released date must be non-empty"],
    validate: {
      validator: function (date) {
        return !NaN(date);
      },
      message: "Enter the valid date",
    },
  },
  genre: {
    type: [String],
    required: [true, "genres must be non-empty"],
  },
  actor: {
    type: [String],
    required: [true, "actors must be non-empty"],
  },
  director: {
    type: String,
    required: [true, "director name must be non-empty"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "duration of the movie must be non-empty"],
  },
});

module.exports = mongoose.model("movies", moviesModel);
