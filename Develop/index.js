// TODO: Include packages needed for this application
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var inquirer = require('inquirer');
var writeToFile = require("./utils/writeToFile");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license does your project have?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`File written to ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    function init() {
        inquirer
            .prompt([
                // your prompts go here
            ])
            .then((answers) => {
                const readmeContent = generateMarkdown(answers);
                writeToFile('README.md', readmeContent);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

// Function call to initialize app
init();
