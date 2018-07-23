const {
  setWorldConstructor,
} = require('cucumber');
const supertest = require('supertest');
const env = require('../../../../src/env-vars');
const server = require('../../../../server');
const expect = require('expect');

function CustomWorld(args) {
  this.supertest = supertest;
  this.expect = expect;
  this.expressInstance = server;
  this.env = env;
  this.attach = args.attach;
}

setWorldConstructor(CustomWorld);
