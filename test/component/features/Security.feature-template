Feature: API key check
  In order to check the api key is configured
  As a developer
  I want to ping the service without an api key

  Scenario: 401 http response returned when the api key is not present
    When a user attempts to send a request without an api key
    Then a 401 response is returned

  Scenario: 401 http response returned when the wrong api key is sent
    When a user attempts to send a request with the wrong api key
    Then a 401 response is returned
