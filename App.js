const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/router');
// const db = require('./config/connection.js')


app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  



app.use('/', routes);

const port = 8080; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
