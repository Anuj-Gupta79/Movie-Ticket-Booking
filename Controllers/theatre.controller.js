const theatreModel = require("../Model/theatre.model");

// Add new theatre
exports.addNewTheatre = async (req, res) => {
  try {
    // const reqTheatre = req.body;
    const theatreName = req.body.name;
    const theatreAddress = req.body.address;
    const theatreCity = req.body.city;
    const theatreState = req.body.state;
    const theatreZip = req.body.zip_code;
    const theatreCapacity = req.body.capacity;
    const theatreCode = theatreName + theatreAddress + theatreZip;

    const prevTheatre = theatreModel.find({ theatre_code: theatreCode });

    console.log(prevTheatre);

    if (prevTheatre) {
      return res.status(409).send({ message: "Theatre is already added!" });
    }

    const theatre = await theatreModel.create({
      name: theatreName,
      address: theatreAddress,
      city: theatreCity,
      state: theatreState,
      zip_code: theatreZip,
      capacity: theatreCapacity,
      theatre_code: theatreCode,
    });

    res.status(200).send(theatre);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get theatre list
exports.getTheatreList = async (req, res) => {
  try {
    const theatres = await theatreModel.find();
    res.status(200).send(theatres);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get the theatre by

// update theatre details
exports.updateTheatre = async (req, res) => {
  try {
    const theatreCode = req.params.theatre_code;
    const requestedChanges = req.body;

    if (Object.keys(requestedChanges).length === 0) {
      return res.status(409).send({ message: "nothing to change" });
    }

    const updatedTheatre = theatreModel.findOneAndUpdate(
      { theatre_code: theatreCode },
      requestedChanges,
      { new: true }
    );

    if (!updatedTheatre) {
      return res.status(404).send({ message: "Theatre details not found." });
    }

    res.status(200).send({ message: "Theatre details updated successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// delete a theatre
exports.deleteTheatre = async (req, res) => {
  try {
    const theatreCode = req.params.theatre_code;
    const deletedTheatre = theatreModel.findOneAndDelete({
      theatre_code: theatreCode,
    });

    if (!deletedTheatre) {
      return res
        .status(404)
        .status({ message: "Theatre details haven't exist." });
    }

    res
      .status(200)
      .send({ message: "Theatre's details has been deleted successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
