const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
});

console.log(process.env, DB_HOST);
