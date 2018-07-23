Feature: Execution
  In order to check the calculation result
  As a developer
  I want to post to the execution endpoint and see that the correct results are returned

  Scenario Outline: calculations checked
    When a user posts a payload for "<scenarioKey>" - <description>
    Then the response produced for "<scenarioKey>" is as expected

    Examples:
      | scenarioKey   | description                 |
      | SCENARIO_KEY  | the scenario description    |
