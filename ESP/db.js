const mysql = require("mysql2");

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log("Error in DB connection " + err.stack);
  } else {
    console.log("Connection successfull ");
  }
});

module.exports = connection;
