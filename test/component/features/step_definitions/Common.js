const {
  When,
  Then,
} = require('cucumber');

When(/^a user posts a payload for "(.*)" - (.*)$/,
  async function process(scenarioKey, description) {
    const scenarioPayload = require(`../../resources/requests/${scenarioKey}`);
    this.state.response = await this.supertest(this.expressInstance)
      .post(`/v1/endpoint`)
      .set('X-Test-Spec', scenarioKey)
      .send(scenarioPayload)
      .set('Authorization', this.env.API_KEY);
  });

Then(/^the response produced for "(.*)" is as expected$/, function (scenarioKey) {
  const assertions =
    require(`../../resources/assertions/${scenarioKey}`);

  assertions.forEach((assertionItem) => {
    const selection = assertionItem.selector(this.state.response.body);
    this.expect(selection).toEqual(assertionItem.expectedResult);
  });
});
