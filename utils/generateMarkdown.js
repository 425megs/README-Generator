// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) 
// {
  // if () {
//     return license link
//   } else {
//     return ("")
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) 

// use a switch statement

// {
      // if () {
//     return license section
//   } else {
//     return ("")
//   }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.install}
  ## ${data.motivation}
  ### ${data.email}
`
};

module.exports = generateMarkdown;
