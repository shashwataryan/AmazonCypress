const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: '4cbp7u',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
