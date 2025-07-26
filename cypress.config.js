const { defineConfig } = require('cypress');
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify"); 
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprocessor,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    "qa": {
      "url": "https://rahulshettyacademy.com/"
    },
    "dev": {
      "url": "https://rahulshettyacademy.co/"
    },
    "uat": {
      "url": "https://rahulshettyacademy.com/"
    }
  },

  "retries":{
    "runMode":2
  },

  projectId: "visd6g",
  
  setupNodeEvents,
  
  e2e: {
    baseUrl: 'http://localhost:1234',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      'cypress/integration/examples/*.cy.js','cypress/integration/greenKart/*.cy.js','cypress/integration/examples/BDD/example/*.js'
    ]
    // specPattern: 'cypress/integration/examples/*.cy.js'
  },
});