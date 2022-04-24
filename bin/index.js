#! /usr/bin/env node

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Choose the JS framework which you are using:',
      choices: ['React', 'NextJS', 'Angular', 'Svelte', 'VueJS'],
    },
  ])
  .then((answers) => {});
