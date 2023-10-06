const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});
console.log(process.env.DBUSER);
console.log(process.env.DBPASSWORD);
console.log(process.env.DBHOST);
console.log(process.env.DBDATABASE);
const db = new Client({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    database: process.env.DBDATABASE,
    ssl: false,
    port: 5432,
});

module.exports = db;