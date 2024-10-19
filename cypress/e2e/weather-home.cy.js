describe("Weather App Home", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `${import.meta.env.VITE_WEATHER_API_BASE_URL}/forecast.json*`,
      (req) => {
        req.reply((res) => {
          res.setDelay(1000);
        });
      }
    ).as("getWeatherData");

    cy.visit("/");

    // Wait for the API response before running tests
    cy.wait("@getWeatherData");
  });

  it("should display the correct city name", () => {
    cy.get('[data-testid="weather-city-name"]').should("have.text", "London");
  });

  it("should display a cloud percentage value", () => {
    cy.get('[data-testid="weather-cloud-chance"]')
      .invoke("text")
      .should("not.be.empty");
  });

  it("should display a valid cloud percentage", () => {
    cy.get('[data-testid="weather-cloud-chance"]')
      .invoke("text")
      .then((text) => {
        const cloudPercentage = parseFloat(text.replace("%", ""));
        expect(cloudPercentage).to.be.within(0, 100);
      });
  });

  it("should display a weather temperature value", () => {
    cy.get('[data-testid="weather-temperature"]')
      .invoke("text")
      .should("not.be.empty");
  });

  it("should display a valid weather temperature", () => {
    cy.get('[data-testid="weather-temperature"]')
      .invoke("text")
      .then((text) => {
        const temperature = parseFloat(text.replace(/[^\d.-]/g, ""));
        expect(temperature).to.be.within(-50, 50);
      });
  });

  it("should display time labels for each forecast item", () => {
    cy.get('[data-testid^="forecast-item-"]').each(($el, index) => {
      cy.wrap($el)
        .find(`[data-testid="forecast-time-${index}"]`)
        .invoke("text")
        .should("not.be.empty");
    });
  });

  it("should display icons for each forecast item", () => {
    cy.get('[data-testid^="forecast-item-"]').each(($el, index) => {
      cy.wrap($el)
        .find(`[data-testid="forecast-icon-${index}"]`)
        .should("have.attr", "src")
        .and("not.be.empty");
    });
  });

  it("should display temperature values for each forecast item", () => {
    cy.get('[data-testid^="forecast-item-"]').each(($el, index) => {
      cy.wrap($el)
        .find(`[data-testid="forecast-temperature-${index}"]`)
        .invoke("text")
        .should("not.be.empty")
        .then((text) => {
          const temperature = parseFloat(text.replace(/[^\d.-]/g, ""));
          expect(temperature).to.be.within(-50, 50);
        });
    });
  });

  it("should display valid weather icons and alt text for each forecast item", () => {
    cy.get('[data-testid^="forecast-item-"]').each(($el, index) => {
      cy.wrap($el)
        .find(`[data-testid="forecast-icon-${index}"]`)
        .should("have.attr", "alt")
        .and("not.be.empty");
    });
  });
});
