const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./src/logger');
const bodyParser = require('body-parser');
const bunyanMiddleware = require('bunyan-middleware');
const responseTime = require('response-time');
const helmet = require('helmet');
const nocache = require('nocache');
const {
  BASE_PATH,
  MONGODB_URL,
} = require('./src/env-vars');

const requestLogger = bunyanMiddleware({
  logger,
  headerName: 'info-cap-mgmt-service',
  obscureHeaders: ['authorization'],
  level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info',
});

const apiRoutes = require('./src/routes');
mongoose.Promise = Promise;

const app = express();

mongoose.connect(MONGODB_URL, {
  useMongoClient: true,
});

app.use(requestLogger);
app.use(responseTime());
app.use(helmet());
app.use(nocache());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
const contextRoute = new express.Router();
apiRoutes(contextRoute);
app.use(BASE_PATH, contextRoute);

app.shutdown = () => {
};

module.exports = app;
