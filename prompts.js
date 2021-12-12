module.exports = {
  mainPrompt: [
    {
      type: "rawlist",
      name: "menuAction",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add Employee",
        "Add Department",
        "Add Role",
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
      message: "What department would you like to add?",
    },
  ],
  // Questions for add role
  addRole: [
    {
      type: "input",
      name: "title",
      message: "What is the role title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of this role?",
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
  ],
};
