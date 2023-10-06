const express = require('express');
const app = express();
const routes = require('./routes/router');
const db = require('./config/connection.js')


db.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Database is connected')
})


app.use('/', routes);

const port = 8080; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});