const admin = require('../config/firebaseInit.js');
const db = admin.database();


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
}

module.exports = {
    newData
}