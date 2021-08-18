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
            name:"title",
            message: "What is the name of your application?",
        },
        {
            type: "input",
            name:"description",
            message: "Describe your application:",
        },
        {
            type: "input",
            name:"contents",
            message: "What is included in your project?",
        },
        {
            type: "input",
            name:"installation",
            message: "How do you install your application?",
        },
        {
            type: "input",
            name:"usage",
            message: "How will this project be used?",
        },
        {
            type: "list",
            name:"license",
            message: "What license did you use?",
            choices: ["MIT", "ISC", "Apache License 2.0", "n/a"],
        },
        {
            type: "input",
            name:"contributions",
            message: "What are your contributions?",
        },
        {
            type: "input",
            name:"tests",
            message: "What tests have you performed?",
        },
        {
            type: "input",
            name:"questions",
            message: "If you have any questions, please reach me:",
        }
    ])
    // create .then
    .then((data) =>{
        const generateMarkdown = `${data.title.toLowerCase().split(' ').join('')}.md`
        // console.log(data.questions);

        fs. writeFile(generateMarkdown, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('README has been generated!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
