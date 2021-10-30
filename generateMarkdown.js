// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/Apache-2.0)
## Table of Contents  

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#constributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}
### Installation 
${data.installation}
### Usage 
${data.usage}
### Contributions 
${data.contributions}
### Tests
${data.tests}
### Questions? 
Email:${data.email}
Github: github.com/${data.github}
`;
}

module.exports = generateMarkdown;