const {
  When,
  Then,
} = require('cucumber');

When(/^a user attempts to send a request without an api key$/, async function process() {
  this.state.response = await this.supertest(this.expressInstance)
    .post(`/v1/${this.env.LAMBDA_FUNCTION_ID}`)
    .send({});
});

When(/^a user attempts to send a request with the wrong api key$/, async function process() {
  this.state.response = await this.supertest(this.expressInstance)
  .post(`/v1/${this.env.LAMBDA_FUNCTION_ID}`)
    .send({})
    .set('Authorization', 'wrong');
});

Then(/^a 401 response is returned$/, function () {
  this.expect(this.state.response.statusCode).toEqual(401);
  this.expect(this.state.response.body).toEqual({
    code: 'UNAUTHORIZED',
    message: 'Invalid API key',
    moreInfo: null,
    source: null,
    statusCode: 401,
  });
});
