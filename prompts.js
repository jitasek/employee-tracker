module.exports = {
  mainPrompt: [
    {
      type: "list",
      name: "menuAction",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update employee role",
        "Exit",
      ],
    },
  ],

  // Questions for add department
  addDepartment: [
    {
      type: "input",
      name: "dptName",
      message: "What is the name of the department you would like to add?",
    },
  ],
  // Questions for add role
  addRole: [
    {
      type: "input",
      name: "title",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of this role?",
    },
    {
      type: "input",
      name: "department",
      message: "Which department does the role belong to?",
    },
  ],
  // Questions for adding employee
  addEmployee: [
    {
      type: "input",
      name: "firstName",
      message: "What is employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "input",
      name: "roleTitle",
      message: "What is the employee's role?",
    },
    {
      type: "input",
      name: "manager",
      message: "Who is the employee's manager?",
    },
  ],
  // Questions for updating employee role


};
