const admin = require('../config/firebaseInit.js');
const db = admin.database();
var io = require("../App.js");


io.on('connection', (socket) => {
  console.log('test');
  socket.on('communicate', (data) => {
    console.log('God are communicating: ', data);
  });
});
// const db = admin.database();
const gpsRef = db.ref('gpsData');


const newData = async (req, res) => {
    const gpsData = {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      timestamp: new Date().getTime(),
    };

    gpsRef.push(gpsData)
      .then(() => {
        console.log('GPS data added to the database');
        io.emit('new-gps-data', gpsData);
      })
      .catch((error) => {
        console.error('Error adding GPS data:', error);
      });


    gpsRef.on('child_added', (snapshot) => {
      const gpsData = snapshot.val();
      console.log('New GPS Data:', gpsData);
    });


    const timestamp = new Date('2023-01-01').getTime();
    gpsRef
      .orderByChild('timestamp')
      .startAt(timestamp)
      .on('child_added', (snapshot) => {
        const gpsData = snapshot.val();
        console.log('GPS Data after a specific timestamp:', gpsData);
      });
      //response succesfull
      res.send('GPS data added to the database');
}

const getData = async (req, res) => {
    gpsRef.on('child_added', (snapshot) => {
      const gpsData = snapshot.val();
      console.log('All GPS Data:', gpsData);
    });
    // res.send('All GPS Data');
}

module.exports = {
    newData,
    getData
}