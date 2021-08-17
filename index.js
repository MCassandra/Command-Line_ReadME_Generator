// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")
// markdown
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name:"Application Title",
            message: "What is the name of your application?",
        },
        {
            type: "input",
            name:"Description",
            message: "Describe your application:",
        },
        {
            type: "input",
            name:"Table of Contents",
            message: "What is included in your project?",
        },
        {
            type: "input",
            name:"Installation",
            message: "How do you install your application?",
        },
        {
            type: "input",
            name:"Usage",
            message: "How will this project be used?",
        },
        {
            type: "list",
            name:"License",
            message: "What license did you use?",
            choices: ["MIT", "ISC", "Apache License 2.0", "n/a"],
        },
        {
            type: "input",
            name:"Contributions",
            message: "What are your contributions?",
        },
        {
            type: "input",
            name:"Tests",
            message: "What tests have you performed?",
        },
        {
            type: "input",
            name:"questions",
            message: "If you have any questions, please reach me:",
        }
    ])
    // create .then
    .then((response) =>{
        console.log(response.questions)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
