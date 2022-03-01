const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routesOf = require('./routes/index');
const appService = require('./services/global');

app.use(appService.setHeaders);
app.use(bodyParser.json());

app.use('/songs', routesOf.song);
app.use('/configurations', routesOf.appConfiguration);
app.use(
  '/.well-known/apple-app-site-association',
  routesOf.replyWithAAppleConfigurationFile
);

app.use('', appService.replyWithAWelcomingPage);

module.exports = app;
