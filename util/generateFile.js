function generateFile(data){
    return`# ${data.title}

    ## Description
    ${data.description}

    # Table of Contents
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

    # Contact for Questions:
    Feel free to **email** me at ${data.email} or view my **github profile** at https://github.com/${data.github}
    `;
}


module.exports = generateFile;