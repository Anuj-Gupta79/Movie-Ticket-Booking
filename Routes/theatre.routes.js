const express = require('express');
const theatreController = require('../Controllers/theatre.controller');

const router = express.Router();

router.post('/addNewTheatre', theatreController.addNewTheatre);
router.get('/getTheatreList', theatreController.getTheatreList);

module.exports = router;