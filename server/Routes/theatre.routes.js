const express = require("express");
const theatreController = require("../Controllers/theatre.controller");

const router = express.Router();

router.post("/addNewTheatre", theatreController.addNewTheatre);
router.get("/getTheatreList", theatreController.getTheatreList);
router.get("/getSpecificTheatre", theatreController.getTheatreByID);
router.put("/updateTheatre", theatreController.updateTheatre);
router.delete("/deleteTheatre", theatreController.deleteTheatre);

module.exports = router;
