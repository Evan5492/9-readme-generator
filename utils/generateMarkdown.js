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
  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
  -[Badges](#badges)
  -[How to Contribute](#contribute)
  -[Tests](#tests)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.install}
  ## Usage:
  ${data.usage}
  ## Credits:
  ${data.credits}
  ## License:
  ${data.license}
  ## Badges:
  ${data.badges}
  ## How to Contribute:
  ${data.contribute}
  ## Tests:
  ${data.tests}
  ## Contact Information:
  -Github: [${data.github}](https://github.com/${data.github})
  -Email: [${data.email}](mail to: example@etc.com) `;
}

module.exports = generateMarkdown;
