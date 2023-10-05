const showTimeModel = require("../Model/showtime.model");

// Adding a new movie
exports.addNewShowtime = async (req, res) => {
  try {
    const { movie, theatre, startDate, endDate } =
      req.body;

    const showtimeByMovie = showTimeModel.findOne({});

    const showtime = await showTimeModel.create({
      movie: movie,
      theatre: theatre,
      start_date: startDate,
      end_date: endDate,
      adults_price: req.body.adults_price,
      children_price: req.body.children_price,
    });

    res.status(200).send(showtime);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// getting all the movies
exports.showtimeList = async (req, res) => {
  try {
    const list = await showTimeModel.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// get a specific movie by its name
exports.getByShowtimeID = async (req, res) => {
  try {
    const showtimeId = req.params.id;
    // console.log(showtime);
    const showtime = await moviesModel.findById(showtimeId);

    if (showtime) {
      return res.status(200).send(showtime);
    }

    return res.status(404).send({ message: "showtime not found!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// update any movie
exports.updateShowtime = async (req, res) => {
  try {
    const showtimeId = req.params.id;
    const requestedField = req.body;
    // console.log(requestedField);
    // console.log(movieName);
    // console.log(Object.keys(requestedField).length);
    if (Object.keys(requestedField).length == 0) {
      return res.status(409).send({ message: "Nothing to update" });
    }

    const updatedShowtime = await showTimeModel.findOneAndUpdate(
      { _id: showtimeId },
      requestedField,
      { new: true }
    );

    if (!updatedShowtime) {
      return res.status(404).send({ message: "Showtime is not found." });
    }

    res.status(200).send({ message: "Showtime updated successfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// delete a specific movie
exports.deleteShowtime = async (req, res) => {
  try {
    const showtimeID = req.params.id;
    const deletedShowtime = await showTimeModel.findOneAndDelete({
      _id: showtimeID,
    });
    if (!deletedShowtime) {
      return res.status(404).send({ message: "Showtime not found!" });
    }
    return res.status(200).send({ message: "Showtime deleted successfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
