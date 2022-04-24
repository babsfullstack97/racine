#! /usr/bin/env node

const inquirer = require('inquirer');

const { questions, questionsTs } = require('./utils/questions.js');

inquirer.prompt(questions).then((answers) => {
  // Use user feedback for... whatever!!
});
