# cypress_sauce_test
POC project with automation Framework Cypress

Node.js with Cypress automated testing project from scratch and follow the structure learned in the video to create tests against the following website:  https://www.saucedemo.com/

The structure should contain tests, functions and elements for the following pages: login, inventory, items (products), cart, checkout.


before running the test:
1-Installing NodeJS and NPM(https://nodejs.org/en/)
2-Installing Visual Studio Code(https://code.visualstudio.com/)

Follow these steps:

1- Clone the repository

git clone https://github.com/alvaroespinozaGL/cypress_sauce_test.git
cd cypress_sauce_test # to move into the repository folder.
npm install  # to install the dependencies that are located in the package.json file.

2- Start Cypress UI.
npx cypress open

3- Open the IDE and open this repository.

cypress/integration folder: This folder contains all specs, or the implementation of the test cases.
cypress/page-objects folder: This folder contains all the page objects to be used in the spec files (test cases) to reuse the page locators.
package.json file: This file contains the dependencies for our project. Also in this file we have a section for scripts.


to run the automated script you can follow the next steps.

1- Run all test cases with default configurations:

npm test
2- Run all tests in Firefox

npm run test-firefox  # this is an alias that will run "cypress run -b firefox"
3- Run all tests in Chrome

npm run test-chrome  # this is an alias that will run "cypress run -b chrome"

