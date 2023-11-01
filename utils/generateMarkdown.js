// function that will return license reponse with BADGE + URL
function renderLicenseBadge(response) {
  var licenseOption = response.license;
  var licenseChoice;

  if (licenseOption === "Apache License 2.0") {
    licenseChoice = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseOption === "Boost Software License 1.0") {
    licenseChoice = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (licenseOption === "BSD 3-Clause License") {
    licenseChoice = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (licenseOption === "BSD 2-Clause License") {
    licenseChoice = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else {
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
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)

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

// BOOST [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

// BSD 3 Clause [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// BSD 2 Clause [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)




*/