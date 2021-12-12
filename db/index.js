"use strict";
const connection = require("./connection");
// console.log(connection);

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllTitles() {
    return this.connection.query(
      `SELECT title.id, title.name AS Title, title.salary AS Salary FROM title ORDER BY title.id`
    );
  }

  // close connection and catch error
  closeConnection() {
    try {
      this.connection.end();
    } catch (error) {
      console.log("Connection error: " + error);
    }
  }
}

module.exports = new DB(connection);
