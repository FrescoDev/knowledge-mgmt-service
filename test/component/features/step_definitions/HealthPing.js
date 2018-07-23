const {
  When,
  Then,
} = require('cucumber');


When(/^engineering check the health endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/health');
  });

Then(/^the health response is valid$/, function () {
  this.expect(this.state.response.body).toEqual({
    isHealthy: true,
  });
});

