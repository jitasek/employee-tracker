"use strict";
const mysql = require("mysql2");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "employees-db",
});
connection.connect();

