const test = require('tape');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

test('that env vars are validated', (t) => {
  const sandbox = sinon.sandbox.create();
  const envalidStub = sandbox.stub();
  envalidStub.str = sandbox.stub().returns("str");
  envalidStub.num = sandbox.stub().returns("num");
  envalidStub.bool = sandbox.stub().returns("bool");
  envalidStub.cleanEnv = sandbox.stub();

  const module = proxyquire('./env-vars', {
    'envalid': envalidStub
  });

  t.deepEquals(envalidStub.cleanEnv.args[0][1], {
    BASE_PATH: 'str',
    PORT: 'num',
    MONGODB_URL: 'str',
  });

  t.end();
});
