function generateFile(data){
    // project title displayed as README file
    return`# ${data.title}
    
    # ${data.title}

    ## License:

    ## Description:
    ${data.description}


    ## Table of Contents:
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Contribution](#contribution)
    4. [Testing](#testing)
    5. [Contact for Questions](#email)

    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## Contribution:
    ${data.contribution}

    ## Testing:
    ${data.testing}

    ## Contact for Questions:
    Feel free to **email** me at ${data.email} or view my **github profile** at https://github.com/${data.github}
    `;
};



module.exports = generateFile;