"use strict";
const { connect } = require("http2");
const mysql = require("mysql2");
const util = require("util");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "employees-db",
});
connection.connect();

// set up connection.query to enable async behavior
connection.query = util.promisify(connection.query);

module.exports = connection;
