const inquierer = require('inquirer');
const fs = require('fs');
const InputPrompt = require('inquirer/lib/prompts/input');

const questions = [
    {
        type: 'input', 
        name:'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input', 
        name:'description',
        message: "What is the title of your project?"
    },
    {
        type: 'input', 
        name:'installation',
        message: "How do you install your project?"
    },
    {
        type: 'input', 
        name:'usage',
        message: "How do you use your project?"
    },
    {
        type: 'input', 
        name:'contribution',
        message: "How should people contribute to your project?"
    },
    {
        type: 'input', 
        name:'testing',
        message: "How did you test your project?"
    },
    {
        type: 'checkbox', 
        name:'licensing',
        message: "Choose a license for your project?",
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },
    {
        type: 'input', 
        name:'questions',
        message: "Please provide an email address so other developers can contact you if they have questions about your project."
    },
];