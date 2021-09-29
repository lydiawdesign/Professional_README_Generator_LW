// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./util/generateFile');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name:'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input', 
        name:'description',
        message: "What is the description your project?"
    },
    {
        type: 'input', 
        name:'installation',
        message: "How do you install your project?"
    },
    {
        type: 'input', 
        name:'usage',
        message: "What is the usage informaton for your project?"
    },
    {
        type: 'input', 
        name:'contribution',
        message: "What is are your project's contribution guidelines?"
    },
    {
        type: 'input', 
        name:'testing',
        message: "How did you test your project?"
    },
    {
        type: 'checkbox', 
        name:'license',
        message: "Choose a license for your project?",
        choices: ['MIT', 'None'],
    },
    {
        type: 'input', 
        name:'email',
        message: "Please provide an email address so other developers can contact you if they have questions about your project."
    },
    {
        type: 'input', 
        name:'github',
        message: "What is your GitHub username?"
    },
];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init (){
    inquirer
    .prompt(questions)
    .then(function (userInput) {
        // console.log(userInput)
        writeToFile("README.md", generateFile(userInput));
    });
};

// Function call to initialize app
init();