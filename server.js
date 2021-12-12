"use strict";
const inquirer = require("inquirer");
const prompts = require("./prompts");
const db = require("./db");
const { mainPrompt } = require("./prompts");
require("console.table");

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
