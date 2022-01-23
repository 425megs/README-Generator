const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "How to use the app:",
            name: "howToUse"
        },
        {
            type: "input",
            message: "How to install:",
            name: "howToInstall"
        },
        {
            type: "checkbox",
            message: "What technologies were used?",
            choices: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'Git'],
            name: "technologies"
        },
        {
            type: "input",
            message: "How to run tests:",
            name: "tests"
        },
        {
            type: "input",
            message: "How to report issues:",
            name: "report"
        },
        {
            type: "input",
            message: "How to contribute:",
            name: "contribute"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub?",
            name: "github"
        }
    ]);
};

const generateReadme = ({
    title,
    description,
    howToUse,
    howToInstall,
    tests,
    technologies,
    report,
    contribute,
    email,
    github
}) => `
# ${title}

## Description
* This README was automatically created via a README generator tool.
* ${description}

### Table of Contents  
[Technologies used](#technologies) <br>
[How to use](#Usage) <br>
[How to install](#Installation) <br>
[Report Issues](#Report-issues) <br>
[How to Contribute](#Contribute) <br>
[Tests](#Tests) <br>
[Questions](#Questions)


## Technologies Used:
* ${technologies}

## Usage:
* ${howToUse}

## Installation:
* ${howToInstall}

## Tests
* ${tests}

## Report-issues:
* ${report}
* Email: ${email}
* GitHub username: ${github}

## Contribute:
* ${contribute}

## Questions
* If you have additional questions, please contact me via GitHub: ${github} or email me at ${email}.
`

const init = () => {
    questions()
    .then((userInput) => fs.writeFileSync(`${userInput.title}.md`, generateReadme(userInput)))
    .then(() => console.log('generated readme'))
    .catch((err) => {
        throw err
    })
}
init();