const http = require('http');
const app = require('./App');
const dotenv = require('dotenv');

dotenv.config();
const server = http.createServer(app);

const { server_port } = process.env;
const port =  process.env.PORT || server_port;

server.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`);
})