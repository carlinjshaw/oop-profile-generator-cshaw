const inquirer = require('inquirer');
const fs = require('fs')

const template = require('./html-template.js');
// import all children classes
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern')

data = [ [], [] ]

initial = () => {

inquirer
  .prompt([
    /* Pass your questions in here */
    //manager questions
    {
      type: "input",
      message: "What is your team managers name?",
      name: "managerName",
    },
    {
      type: "number",
      message: "What is your team managers employee ID?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is your team manager's email address?",
      name: "managerEmail",
    },
    {
      type: "number",
      message: "What is your team manager's office number?",
      name: "managerOffice",
    },
    //teamChoice question- about employee entry, or finish team
    {
      type: "list",
      message: "who else is a part of your team?",
      name: "teamChoice",
      choices: ["Engineer", "Intern", "Finish building team"]
    }
  ])
  .then((answers) => {

    const newManager = new Manager(answers.managerName,answers.managerId, answers.managerEmail, answers.managerOffice);

    data.push(newManager)
    console.log(data)
     
    //call the engineer, intern or End functions on the condition that they were selected in the teamChoice question
    if (answers.teamChoice === "Engineer"){
         addEngineer(data)
    } else if (answers.teamChoice === "Intern"){
         addIntern(data)
    } else if (answers.teamChoice === "Finish building team"){
          finish(data)
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
}
initial()
//engineer function, at the end will have teamChoice question, can itself again or intern or end

addEngineer = (data) => {
  
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is your engineers ID number?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is your engineers email address?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is your engineers Github username?",
        name: "engineerGithub",
      },
      {
        type: "list",
        message: "who else is a part of your team?",
        name: "teamChoice",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((answers) => {

      const newEngineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
      data[0].push(newEngineer);
      console.log(data);

for(var i=0; i<data[0].length; i++) {
   if (answers.teamChoice === "Engineer"){
    answers.teamChoice = ""
    addEngineer(data);
   }
   if (answers.teamChoice === "Intern"){
    answers.teamChoice = ""
    addIntern(data);
  }
  if (answers.teamChoice === "Finish building team"){
    answers.teamChoice = ""
    finish(data);
  }
}

      // if (data[0][0].teamChoice === "Engineer") {
      //   //make the teamchoice empty so later logic is relevant
      //   data[0][0].teamChoice = ""
      //   addEngineer(data);
      // } else if (data[0][0].teamChoice === "Intern") {
      //   data[0][0].teamChoice = ""
      //   addIntern(data);
      // } else if (data[0][0].teamChoice === "Finish building team") {
      //   data[0][0].teamChoice = ""
      //   finish(data);
      // } 
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};

addIntern = (data) => {
  
  inquirer 
  .prompt([
    {
      type: "input",
      message: "What is your interns name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is your interns ID number?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is your interns email address?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What school does your intern attend?",
      name: "internSchool",
    },
    {
      type: "list",
      message: "who else is a part of your team?",
      name: "teamChoice",
      choices: ["Engineer", "Intern", "Finish building team"]
    }
  ])
  .then((answers) => {

    const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)

    data[1].push(newIntern);
    console.log(data);

    for(var i=0; i<data[1].length; i++) {

      if (answers.teamChoice == "Engineer"){
       answers.teamChoice = ""
       addEngineer(data);
      }
      if (answers.teamChoice == "Intern"){
       answers.teamChoice = ""
       addIntern(data);
     }
     if (answers.teamChoice == "Finish building team"){
       answers.teamChoice = ""
       finish(data);
     }
   }

  })
}


finish = (data) => {
template(data)
  // console.log(template(data))
  
  fs.writeFile("team.html", template(data), (err) => {
    if (err)
    console.log(err)
  })
}
