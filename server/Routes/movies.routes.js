const express = require('express');
const moviesController = require('../Controllers/movies.controller');
const router = express.Router();

router.post('/addNewMovie', moviesController.addNewMovie);
router.get('/getMoviesList', moviesController.moviesList);
router.get('/getMovie/:title', moviesController.getByMovieName);
router.put('/updateMovie/:title', moviesController.updateMovie);
router.delete('/deleteMovie/:title', moviesController.deleteMovie);

module.exports = router;