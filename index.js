//Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG');

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for your logo.',
        name: 'text',
        default: 'ABC'
    },
    {
        type: 'list',
        message: 'Enter a shape for your logo.',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Enter a color name or hexadecimal number for your logo text color.',
        name: 'characters',
        default: 'textColor'
    },
    {
        type: 'input',
        message: 'Enter a color name or hexadecimal number for your logo background color.',
        name: 'backgroundColor',
        default: 'green'
    }
];

// Function to write .svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateSVG.generateSVG(data), (error) => {
        error ? console.error(error) : console.log('Generated logo.svg');
    });
}

// Function to initialize
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('logo.svg', data);
    });
}

// Function call to initialize
init();