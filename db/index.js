"use strict";
const connection = require("./connection");
// console.log(connection);

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // VIEWING

  viewAllDepartments() {
    try {
      return this.connection.query(
        `SELECT department_id AS ID, d.name AS Departments FROM department;`
      );
    } catch (err) {
      if (err) throw err;
    }
  }

  viewAllRoles() {
    try {
      return this.connection.query(
        `SELECT role_id AS ID, 
            roles.title AS Title, 
            department.name AS Department, 
            roles.salary AS Salary 
            FROM roles ORDER BY role_id;`
      );
    } catch (err) {
      if (err) throw err;
    }
  }

  viewAllEmployees() {
    try {
      return this.connection.query(
        `SELECT e1.employee_id AS ID, 
            e1.first_name AS First_Name, 
            e1.last_name AS Last_Name, 
            roles.title AS Role, 
            department.name AS Department, 
            roles.salary AS Salary, 
            e2.last_name AS Manager FROM employee e1 
            LEFT JOIN roles ON e1.role_id = roles.id`
      );
    } catch (err) {
      if (err) throw err;
    }
  }

  // ADDING

  addDepartment() {
    try {
    } catch (err) {
      console.log("Error: Department not inserted: " + err);
    }
  }

  addRole() {
    try {
    } catch (err) {
      console.log("Error: Role not inserted: " + err);
    }
  }

  addEmployee() {
    try {
    } catch (err) {
      console.log("Error: Employee not inserted: " + err);
    }
  }

  // UPDATING

  updateEmployeeRole() {}

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
