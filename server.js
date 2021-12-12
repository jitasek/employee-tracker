"use strict";
const inquirer = require("inquirer");
const prompts = require("./prompts");
const db = require("./db");
require("console.table");

async function viewAllTitles() {
  const titles = await db.viewAllTitles();

  console.table(titles);

  //mainPrompt();
}
