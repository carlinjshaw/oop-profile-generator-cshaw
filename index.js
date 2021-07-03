const inquirer = require('inquirer');
//idk if this works
// const template = require('html-template.js')
data = [ [], [] ]

initial = () => {


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
    //teamChoice question- about employee entry, or finish team
    {
      type: "list",
      message: "who else is a part of your team?",
      name: "teamChoice",
      choices: ["Engineer", "Intern", "Finish building team"]
    }
  ])
  .then((answers) => {
    data.push(answers)
    console.log(data)
     
    //call the engineer, intern or End functions on the condition that they were selected in the teamChoice question
    if (data[2].teamChoice === "Engineer"){
         addEngineer(data)
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
      data[0].push(answers);
      console.log(data);

for(var i=0; i<data[0].length; i++) {
   if (data[0][i].teamChoice == "Engineer"){
     console.log("engineer was chosen to add")
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
    data[1].push(answers);
    // console.log(data);

    if (data[1][0].teamChoice === "Engineer") {
      data[1][0].teamChoice = ""
      addEngineer(data);
    } else if (data[1][0].teamChoice === "Intern") {
      data[1][0].teamChoice = ""
      addIntern(data);
    } else if (data[1][0].teamChoice === "Finish building team") {
      data[1][0].teamChoice = ""
      finish(data);
    } 

  })
}

finish = (data) => {
  console.log(data)
  console.log("The script has finished!")
}

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team