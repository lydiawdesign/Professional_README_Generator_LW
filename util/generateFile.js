// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT'){
        return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }else {
        return '';
    }
}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// // function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateFile(data){
    return`# ${data.title}

${renderLicenseBadge(license)}

## Description
    ${data.description}

## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Contact for Questions](#email)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Contribution
    ${data.contribution}

## Testing
    ${data.testing}

## Contact for Questions:
    Feel free to email me at ${data.email} or view my github profile at https://github.com/${data.github}
    `;
}


module.exports = generateFile;