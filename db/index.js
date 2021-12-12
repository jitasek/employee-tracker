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

  addDepartment(dptName) {
    try {
      this.connection.query(
        "INSERT INTO department SET ?",
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
          department_id: `${departmentID}`,
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
        "INSERT INTO employee SET ?",
        {
          first_name: `${firstName}`,
          last_name: `${lastName}`,
          role_id: `${roleID}`,
          department_id: `${departmentID}`,
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
        "UPDATE employee SET ? WHERE ?",
        [
          {
            role_id: roleID,
          },
          {
            employee_id: employeeID,
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
      console.log("Connection error: " + error);
    }
  }
}

module.exports = new DB(connection);
