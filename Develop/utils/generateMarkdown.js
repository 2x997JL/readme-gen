//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if (license === 'GPL 3.0') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if (license === 'BSD 3') {
    return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
  } else {
    return '';
  }
}


// function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}


// function that returns the license section of README
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (!licenseBadge && !licenseLink) {
    return '';
  }

  return `
## License

This project is licensed under the [${license}](${licenseLink}) license.  
![License Badge](${licenseBadge})
`;
}


//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

`;
}

module.exports = generateMarkdown;