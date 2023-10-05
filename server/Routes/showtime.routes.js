const express = require("express");
const router = express.Router();
const showtimeController = require("../Controllers/showtime.controller");

router.post("/addShowtime", showtimeController.addNewShowtime);
router.get("/getShowtimeList", showtimeController.showtimeList);
router.get("/getShowtime/:id", showtimeController.getByShowtimeID);
router.put("/updateShowtime/:id", showtimeController.updateShowtime);
router.delete("/deleteShowtime/:id", showtimeController.deleteShowtime);

module.exports = router;
