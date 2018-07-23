Feature: Service availability checks
  In order to check the availability of the service
  As a developer
  I want to ping the health and ping endpoints

  Scenario: Pings the health endpoint
    When engineering check the health endpoint
    Then the health response is valid
