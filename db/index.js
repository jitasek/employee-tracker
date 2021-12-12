"use strict";
const connection = require("./connection");
// console.log(connection);

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllDepartments() {
    return this.connection.query(
      `SELECT id, name AS Departments FROM department;`
    );
  }

  viewAllRoles() {
    return this.connection.query(
      `SELECT role.id, role.title AS Title, department.name AS Department, role.salary AS Salary FROM title ORDER BY role.id;`
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
