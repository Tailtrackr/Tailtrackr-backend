const admin = require('firebase-admin');
const serviceAccount = require('./tail-trackr-cred.json');

const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASEURL,
});


module.exports = firebaseApp;