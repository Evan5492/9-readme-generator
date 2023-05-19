// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Must enter project title');
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose and functionality of this project?",
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else {
                console.log('Must enter project description');
                return false;
            }
        }
    },
    {
        type:"input",
        name:"installation",
        message:"What is needed to install this app?",
        validate: installInput => {
            if (installInput){
                return true;
            } else {
                console.log('Must enter explaination for installing project');
                return false;
            }
        }

    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for running this app?",
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log('Must enter project usage description');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "credits",
        message: "Are there any credits to be given on this project?",
        validate:creditsInput => {
            if (creditsInput){
                return true;
            } else {
                console.log('Must enter project credits');
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "What liscense is being used?",
        choices: ['Apache 2.0', 'MIT', 'Eclipse Public 2.0', 'ISC', 'None of the above'],
        validate: licenseInput => {
            if (licenseInput){
                return true;
            } else {
                console.log('Must enter project liscense');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "badges",
        message: "Are there any badges for this project?",
        validate: badgesInput => {
            if (badgesInput){
                return true;
            } else {
                console.log('Enter "N/A" if none');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to this project?",
        validate: contributeInput => {
            if (contributeInput){
                return true;
            } else {
                console.log('Explain how to contribute to this app');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "What commands are needed to run this app?",
        validate: testsInput => {
            if (testsInput){
                return true;
            } else {
                console.log('Must enter project description');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter Github username",
        validate: githubInput => {
            if (githubInput){
                return true;
            } else {
                console.log('Must enter Github username');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log('Must enter email address');
                return false;
            }
        }
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err){
            return console.log(err);
        }

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();