const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const PORT = process.env.server_port;


app.get('/', (req, res)=>{
    res.send('Ticket Booking Server is running fine!!!');
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})