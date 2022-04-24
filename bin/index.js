#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const path = process.cwd();

const { questions, questionsTs } = require('./utils/questions.js');

inquirer.prompt(questions).then((answers) => {
  if (answers.framework === 'React') {
    inquirer.prompt(questionsTs).then((answersTs) => {
      if (answersTs.typescript === 'Yes') {
        shell.exec(`mkdir ${answers.projectName}`);
        shell.exec(
          `git clone https://github.com/GKaszewski/react-tailwind-typescript-template ${answers.projectName}`
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
        );
      } else {
        shell.exec(`mkdir ${answers.projectName}`);
        shell.exec(
          `git clone https://github.com/YashKumarVerma/react-tailwind-template ${answers.projectName}`
        );
        console.log('🛠️  Successfully build the required files');
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
        );
      }
    });
  } else if (answers.framework === 'NextJS') {
    inquirer.prompt(questionsTs).then((answersTs) => {
      if (answersTs.typescript === 'Yes') {
        shell.exec(`mkdir ${answers.projectName}`);
        shell.exec(
          `git clone https://github.com/avneesh0612/next-starter ${answers.projectName}`
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
        );
      } else {
        shell.exec(`mkdir ${answers.projectName}`);
        shell.exec(
          `git clone https://github.com/Neeraj1005/Nextjs-tailwind-template ${answers.projectName}`
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
        );
      }
    });
  } else if (answers.framework === 'Svelte') {
    shell.exec(`mkdir ${answers.projectName}`);
    shell.exec(
      `git clone https://github.com/jhanca-vm/Svelte-Tailwind ${answers.projectName}`
    );
    shell.cd(`${path}/${answers.projectName}`);
    shell.exec(`npm i`);
    console.log(
      '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
    );
  } else {
    shell.exec(`mkdir ${answers.projectName}`);
    shell.exec(
      `git clone https://github.com/web2033/vite-vue3-tailwind-starter ${answers.projectName}`
    );
    shell.cd(`${path}/${answers.projectName}`);
    shell.exec(`npm i`);
    console.log(
      '👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀'
    );
  }
});
