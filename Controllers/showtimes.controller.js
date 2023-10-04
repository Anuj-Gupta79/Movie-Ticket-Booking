const showTimeModel = require("../Model/showtime.model");

// Adding a new movie
exports.addNewShowtime = async (req, res) => {
  try {
    const {
      movie,
      theatre,
      ,
      genre,
      actor,
      director,
      duration,
    } = req.body;

    // console.log(req.body);
    // console.log(req.body.description);

    const showtime = await moviesModel.create({
      title: title,
      description: description,
      release_date: releaseDate,
      genre: genre,
      actor: actor,
      director: director,
      duration: duration,
    });

    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// getting all the movies
exports.moviesList = async (req, res) => {
  try {
    const list = await moviesModel.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// get a specific movie by its name
exports.getByMovieName = async (req, res) => {
  try {
    const movieName = req.params.title;
    console.log(movieName);
    const movie = await moviesModel.findOne({ title: movieName });

    if (movie) {
      return res.status(200).send(movie);
    }

    return res.status(404).send({ message: "movie not found!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// update any movie
exports.updateMovie = async (req, res) => {
  try {
    const movieName = req.params.title;
    const requestedField = req.body;
    // console.log(requestedField);
    // console.log(movieName);
    // console.log(Object.keys(requestedField).length);
    if (Object.keys(requestedField).length == 0) {
      return res.status(409).send({ message: "Nothing to update" });
    }

    const updatedMovie = await moviesModel.findOneAndUpdate(
      { title: movieName },
      requestedField,
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).send({ message: "movie not found." });
    }

    res.status(200).send({ message: "Movie updated successfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// delete a specific movie
exports.deleteMovie = async (req, res) => {
  try {
    const movieName = req.params.title;
    const deletedMovie = await moviesModel.findOneAndDelete({
      title: movieName,
    });
    if (!deletedMovie) {
      return res.status(404).send({ message: "movie not found!" });
    }
    return res.status(200).send({ message: "movie deleted successfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};