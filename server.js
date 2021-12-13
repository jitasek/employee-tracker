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
async function newViewAllDepartments() {
  const allDepartments = await db.viewAllDepartments();
  // console.table(allDepartments); // show result on the console

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
async function addNewDepartment() {
  // prompt user for department info (name)
  const dptName = await inquirer.prompt(prompts.addDepartment);

  // pass department info (name) into query function
  const result = await db.addDepartment(dptName);

  viewAllDepartments();
}

async function addNewRole() {
  // display the departments
  const departmentsResult = await db.getDepartments();

  // Fetch the department name from the departments overview (list)
  let departments = [];
  for (let i = 0; i < departmentsResult.length; i++) {
    departments.push(departmentsResult[i].name);
  }

  // Push department name dynamically
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

async function addNewEmployee() {
  // Get all roles first
  const rolesResult = await db.getRoles();

  // filter role names from them
  let roleNames = [];
  for (let i = 0; i < rolesResult.length; i++) {
    roleNames.push(rolesResult[i].title);
  }

  // Get all employees
  const employeeResult = await db.getEmployees();

  // Filter only employee names (concat frist and last names)
  let employeeNames = [];
  for (let i = 0; i < employeeResult.length; i++) {
    employeeNames.push(
      employeeResult[i].first_name + " " + employeeResult[i].last_name
    );
  }

  // Push role names in inquirer prompt array 'addEmployee' dynamically
  prompts.addEmployee.push({
    type: "list",
    name: "roleName",
    message: "What is role ?",
    choices: roleNames,
  });

  // Push employee names in inquirer prompt array 'addEmployee' for getting manager name
  prompts.addEmployee.push({
    type: "list",
    name: "managerName",
    message: "What is manager name ?",
    choices: employeeNames,
  });

  // Prompt user to add employee info
  const { firstName, lastName, roleName, managerName } = await inquirer.prompt(
    prompts.addEmployee
  );

  // Split manager name
  const managerFirstName = managerName.split(" ")[0];
  const managerLastName = managerName.split(" ")[1];

  // Get role id of the selected role (use the selected roleName for it)
  const roleId = rolesResult.filter((role) => role.title === roleName)[0].id;

  // Get manager id (filter selected manager name)
  const managerId = employeeResult.filter(
    (employee) =>
      employee.first_name === managerFirstName &&
      employee.last_name === managerLastName
  )[0].id;

  // called function to execute query by passing employee details
  const addEmployeeResult = await db.addEmployee(
    firstName,
    lastName,
    roleId,
    managerId
  );

  viewAllEmployees();
}

// MAIN PROMPT
async function mainPrompt() {
  const promptUser = await inquirer.prompt(prompts.mainPrompt);

  switch (promptUser) {
    case "View all departments":
      newViewAllDepartments();
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
