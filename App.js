const express = require('express');
const db = require('./Config/db.connection');
const userRoutes = require('./Routes/user.routes');
const app = express();

db.connect();
app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req, res)=>{
    res.send('Ticket Booking Server is running fine!!!');
})

module.exports = app