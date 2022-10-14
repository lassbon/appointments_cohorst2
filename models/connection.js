require('dotenv').config()
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user:  process.env.DATABASE_USER,
  password:  process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database:  process.env.DATABASE_NAME
})



module.exports  =  connection 