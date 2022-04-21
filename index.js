const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'GNU'],
        default: ["MIT"],
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributors?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'If applicable, list your collaborators and their github url.',
        name: 'credits',
    }
  ])
  .then((response) => {
    console.log(response)
  
let data = `# Your Project Title

## Description 

${response.description}
## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)



## Installation

${response.install}

## Usage 

${response.usage}


## Credits

${response.credits}


## License

${response.license}
---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

${response.contributors}

## Tests

${response.test}
---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.`;
// function to write README file using file system 
// const writeFile = data => {
//     fs.writeFile('GENERATE.md', data, err => {
//         // if there is an error 
//         if (err) {
//             console.log(err);
//             return;
//         // when the README has been created 
//         } else {
//             console.log("Your README has been successfully created!")
//         }
//     })
// }; 


fs.writeFile(`GENERATED.md`, data, function(err) {
    if(err) {
        console.error('error')
    }
    console.log('logged');
})

}
);

