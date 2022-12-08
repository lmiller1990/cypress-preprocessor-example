const { defineConfig } = require("cypress");
const preprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        preprocessor()
      );
      // implement node event listeners here
    },
  },
});
