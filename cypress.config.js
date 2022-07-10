const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseURL: "https://localhost:3000/",
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*","**/2-advanced-examples/*"],
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
