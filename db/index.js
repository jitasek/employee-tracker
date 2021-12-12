"use strict";
const connection = require("./connection");
// console.log(connection);

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // VIEWING

  viewAllDepartments() {
    return this.connection.query(
      `SELECT id_departments AS ID, d.name AS Departments FROM departments;`
    );
  }

  viewAllRoles() {
    return this.connection.query(
      `SELECT id_roles AS ID, 
      roles.title AS Title, 
      departments.name AS Department, 
      roles.salary AS Salary 
      FROM roles ORDER BY id_roles;`
    );
  }

  viewAllEmployees() {
    return this.connection.query(
      `SELECT e1.id AS ID, 
      e1.first_name AS First_Name, 
      e1.last_name AS Last_Name, 
      roles.title AS Role, 
      departments.name AS Department, 
      roles.salary AS Salary, 
      e2.last_name AS Manager FROM employees e1
      LEFT JOIN employee e2 ON e1.manager_id = e2.id`
    );
  }

  // GETTING

  getDepartments() {
    try {
      return this.connection.query(`SELECT * FROM departments;`);
    } catch (err) {
      if (err) throw err;
    }
  }

  getRoles() {
    try {
      return this.connection.query(`SELECT * FROM roles;`);
    } catch (err) {
      if (err) throw err;
    }
  }

  getEmployees() {
    try {
      return this.connection.query(`SELECT * FROM employees;`);
    } catch (err) {
      if (err) throw err;
    }
  }

  // ADDING

  addDepartment(dptName) {
    try {
      this.connection.query(
        "INSERT INTO departments SET ?",
        {
          name: `${dptName}`,
        },
        function (err, res) {
          if (err) throw err;
          console.log(`\nSuccess adding ${dptName} department!`);
          return res;
        }
      );
    } catch (err) {
      console.log("Error: Department not inserted: " + err);
    }
  }

  addRole(title, departmentID, salary) {
    try {
      this.connection.query(
        "INSERT INTO roles SET ?",
        {
          title: `${title}`,
          salary: `${salary}`,
          id_departments: `${departmentID}`,
        },
        function (err, res) {
          if (err) throw err;
          console.log(
            `\nSuccess adding role with title:${title}, salary:${salary}, department ID:${departmentID}.`
          );
          return res;
        }
      );
    } catch (err) {
      console.log("Error: Role not inserted: " + err);
    }
  }

  addEmployee(firstName, lastName, roleID, departmentID, salary, manager) {
    try {
      this.connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: `${firstName}`,
          last_name: `${lastName}`,
          id_roles: `${roleID}`,
          id_departments: `${departmentID}`,
          salary: `${salary}`,
          manager_id: `${manager}`,
        },
        function (err, res) {
          if (err) throw err;
          console.log(
            `\nSuccess adding employee with firstName:${firstName}, lastName:${lastName}, roleId:${roleID}, department_id:${departmentID}, salary:${salary}, manager_id:${manager}.`
          );
          return res;
        }
      );
    } catch (err) {
      console.log("Error: Employee not inserted: " + err);
    }
  }

  // UPDATING

  updateEmployeeRole(roleID, employeeID) {
    try {
      this.connection.query(
        "UPDATE employees SET ? WHERE ?",
        [
          {
            id_roles: roleID,
          },
          {
            id: employeeID,
          },
        ],
        function (error) {
          if (error) throw err;
          console.log(`\nEmployee's role successfully updated!`);
        }
      );
    } catch (err) {
      if (err) throw err;
    }
  }

  // close connection and catch error
  closeConnection() {
    try {
      this.connection.end();
    } catch (error) {
      console.log("Connection closing error: " + error);
    }
  }
}

module.exports = new DB(connection);
