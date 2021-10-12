// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your application?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your application:",
        },
        {
            type: "input",
            name: "contents",
            message: "What is included in your project?",
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your application?",
        },
        {
            type: "input",
            name: "usage",
            message: "How will this project be used?",
        },
        {
            type: "list",
            name: "license",
            message: "What license did you use?",
            choices: ["MIT", "ISC", "Apache License 2.0", "n/a"],
        },
        {
            type: "input",
            name: "contributions",
            message: "What are your contributions?",
        },
        {
            type: "input",
            name: "tests",
            message: "What tests have you performed?",
        },
        {
            type: "input",
            name: "github",
            message: "If you need to reach me this is my GitHub:",
        },
        {
            type: "input",
            name: "email",
            message: "If you need to reach me this is my Email:",
        }
    ])
    // create .then
    .then((data) => {
        const newFile = `${data.title.toLowerCase().split(' ').join('')}.md`;
        // console.log(generateMarkdown(data))
   
        fs.writeFile(newFile, generateMarkdown(data), (err)=>
            err ? console.log(err) : console.log("README has been generated")
        ); 
    })


    
// writeToFile(title,generateMarkdown)
// // TODO: Create a function to write README file
// function writeToFile(newFile, generateMarkdown) {
//     `${data.title.toLowerCase().split(' ').join('')}.md`
// }


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
