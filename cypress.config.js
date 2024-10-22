import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
    baseUrl: "http://localhost:5174/weather-app/",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
