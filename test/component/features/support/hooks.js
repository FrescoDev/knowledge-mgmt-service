const {
  Before,
  After,
  setDefaultTimeout,
} = require('cucumber');
const nock = require('nock');
const tk = require('timekeeper');
const moment = require('moment');

Before(function () {
  this.state = {};
  setDefaultTimeout(60 * 1000);
  tk.freeze(moment.utc('2017-01-01').toDate());
});

After(function () {
  nock.cleanAll();
  tk.reset();
});
