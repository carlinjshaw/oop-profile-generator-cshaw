const inquirer = require('inquirer');
//idk if this works
// const template = require('html-template.js')

inquirer
  .prompt([
    /* Pass your questions in here */
    //manager questions
    {
      type: "input",
      message: "What is your team managers name?",
      name: "manager-name",
    },
    {
      type: "number",
      message: "What is your team managers employee ID?",
      name: "manager-id",
    },
    {
      type: "input",
      message: "What is your team manager's email address?",
      name: "manager-email",
    },
    {
      type: "number",
      message: "What is your team manager's office number?",
      name: "manager-office",
    },
    //question about employee entry, or finish team
    {
      type: "list",
      message: "who else is a part of your team?",
      name: "teamChoice",
      choices: ["Engineer", "Intern", "Finish building team"]
    },
  ])
  .then((answers) => {
      console.log(answers)
    // Use user feedback for... whatever!!
    //engineer function is called if engineer was answered
    if (answers.teamChoice === "Engineer") {
        console.log("you chose engineer")
    }
    //followed by employee entry question
    //intern function is called if intern was selected
    //followed by employee entry question
    //if finish team was selected, Writefile function initiates
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

