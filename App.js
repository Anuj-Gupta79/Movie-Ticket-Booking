const express = require('express');
const db = require('./Config/db.connection');
const userRoutes = require('./Routes/user.routes');
const theatreRoutes = require('./Routes/theatre.routes');
const moviesRoutes = require('./Routes/movies.routes');
const app = express();

db.connect();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/theatre', theatreRoutes);
app.use('/movies', moviesRoutes);

app.get('/', (req, res)=>{
    res.send('Ticket Booking Server is running fine!!!');
})

module.exports = app