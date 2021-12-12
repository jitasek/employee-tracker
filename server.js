"use strict";
const inquirer = require("inquirer");
const prompts = require("./prompts");
const db = require("./db");
require("console.table");

async function viewAllRoles() {
  //Get query result from database
  const roles = await db.viewAllRoles();

  console.table(roles);

  mainPrompt();
}
