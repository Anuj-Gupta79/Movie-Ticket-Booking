const express = require('express');
const db = require('./Config/db.connection');
const userRoutes = require('../server/Routes/user.routes');
const theatreRoutes = require('../server/Routes/theatre.routes');
const moviesRoutes = require('../server/Routes/movies.routes');
const showtimeRoutes = require('../server/Routes/showtime.routes');
const bookingRoutes = require('../server/Routes/booking.routes');
const app = express();

db.connect();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/theatre', theatreRoutes);
app.use('/movies', moviesRoutes);
app.use('/showtime', showtimeRoutes);
app.use('/booking', bookingRoutes);

app.get('/', (req, res)=>{
    res.send('Ticket Booking Server is running fine!!!');
})

module.exports = app