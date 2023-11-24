const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require("http");

const { Server } = require("socket.io");
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

const port = 8080; // Choose the desired port number

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


const io = new Server( server, {
  cors: {
    origin: true,
  },
});

module.exports = io;  

const routes = require('./routes/router');
app.use('/', routes);
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });