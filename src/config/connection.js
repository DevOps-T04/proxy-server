require('dotenv').config()
const mysql = require('mysql')

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect(function(err) {
    if (err) throw err;
    console.log("🙌 Connected!");
});

module.exports = con

// READ MORE: https://www.w3schools.com/nodejs/nodejs_mysql.asp