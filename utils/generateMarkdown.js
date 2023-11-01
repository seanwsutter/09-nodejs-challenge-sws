// function that will return license reponse with BADGE + URL
function renderLicenseBadge(response) {
  var licenseOption = response.license;
  var licenseChoice;

  if (licenseOption = "Apache License 2.0") {
    licenseChoice = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    licenseChoice = "";
  }

  return licenseChoice;
}

// function to generate README
function generateMarkdown(response) {
  return `# ${response.title}  
  ${renderLicenseBadge(response)}
  ## Description
  ${response.description}
  
  ## Table of Contents
  - [Description](#description)
  - Installation
  - Usage
  - License
  - Contributions
  - Testing
  - Questions

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.license} 

  ## Contributions
  ${response.contributions}

  ## Testing
  ${response.testing}

  ## Questions & Contact Info
  [GitHub Account Page URL](https://github.com/${response.username})

  Email: ${response.email}

`;
}

module.exports = generateMarkdown;



/* comments

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }


  [URL](${renderLicenseSection(response)})

// function that returns a license badge icon
function renderLicenseBadge(response) {}



*/