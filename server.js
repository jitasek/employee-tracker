"use strict";
const inquirer = require("inquirer");
const prompts = require("./prompts");
const db = require("./db");
const {
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./db");
require("console.table");

// VIEWING
async function viewAllDepartments() {
  const allDepartments = await db.viewAllDepartments();
  console.table(allDepartments); // show result on the console

  mainPrompt();
}

async function viewAllRoles() {
  //Get query result from database
  const allRoles = await db.viewAllRoles();

  console.table(allRoles);

  mainPrompt();
}

async function viewAllEmployees() {
  const allEmployees = await db.viewAllEmployees();
  console.table(allEmployees);

  mainPrompt();
}

// ADDING
async function addDepartment() {
  // prompt user for department info (name)
  const dptName = await inquirer.prompt(prompts.addDepartment);

  // pass department info (name) into query function
  const result = await db.addDepartment(dptName);

  viewAllDepartments();
}

async function addRole() {
  // display the departments
  const departmentsResult = await db.getDepartments();

  // Fetch the department name from the departments overview (list)
  let departments = [];
  for (let i = 0; i < departmentsResult.length; i++) {
    departments.push(departmentsResult[i].name);
  }

  // Dynamically push department name
  prompts.addRole.push({
    type: "list",
    name: "departmentName",
    message: "What is role's department Name ?",
    choices: departments,
  });

  // Prompt user to add role details
  const { roleTitle, roleSalary, departmentName } = await inquirer.prompt(
    prompts.addRole
  );

  // filter and fetch department id from department name
  const departmentID = departmentsResult.filter(
    (res) => res.name === departmentName
  )[0].id;

  // called function to execute query by passing role details
  const addRoleResult = await db.addRole(roleTitle, roleSalary, departmentID);

  viewAllRoles();
}

async function addEmployee() {}

// UPDATING

async function updateEmployeeRole() {}

// MAIN PROMPT
async function mainPrompt() {
  const promptUser = await inquirer.prompt(prompts.mainPrompt);

  switch (promptUser) {
    case "View all departments":
      viewAllDepartments();
      break;

    case "View all roles":
      viewAllRoles();
      break;

    case "View all employees":
      viewAllEmployees();
      break;

    case "Add Department":
      addDepartment();
      break;

    case "Add Role":
      addRole();
      break;

    case "Add Employee":
      addEmployee();
      break;

    case "Update employee role":
      updateEmployeeRole();
      break;

    case "Exit":
      db.closeConnection();
      console.log("Connection closed!");
      break;
  }
}

mainPrompt();
