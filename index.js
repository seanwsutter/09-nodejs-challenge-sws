// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the project title?"
  },
  {
    name: "description",
    type: "input",
    message: "Can you give a description of the project"
  },
  {
    name: "installation",
    type: "input",
    message: "What are the installation instructions?"
  },
  {
    name: "usage",
    type: "input",
    message: "What is the usage information?"
  },

  // license
  {
    name: "license",
    type: "list",
    message: "Select the appropiate license for this project.",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License"
    ],
  },
  {
    name: "contributions",
    type: "input",
    message: "What are the contribution guidelines for this project?"
  },
  {
    name: "testing",
    type: "input",
    message: "What are the instructions for testing?"
  },
  // contaact
  {
    name: "username",
    type: "input",
    message: "What is your GitHub username?"
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?"
  },

];


// function to write README file
function writeToFile(fileName, response) {
  fs.writeFile(fileName, response, (err) => err ?

    console.error(err) : console.log("writeToFile function sucess"));
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(response => {
    console.log("response:", response);

    writeToFile("./example/newREADME.md", generateMarkdown(response));
    console.log("generate README success");
  })
}


init();






/* comments


// function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (error) =>
    error ? console.log(error) :
      console.log("wirteToFile was a sucess"));
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
      console.log("data from questions:", data);
    })
  writeToFile("./sample/README.md", generateMarkdown(data))
};

fs.appendFile(fileName, data, (error) => {
  error ? console.log(error) : console.log("wirteToFile sucess");
})
}

fs.appendFile(fileName, data)
if (error) {
    console.log("error:", error);
}


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



*/