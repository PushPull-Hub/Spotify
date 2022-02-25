const express = require('express');
const router = express.Router();
const AppConfigurationOf = require('../services/configuration');

router.get('/', (request, response, next) => {
  const userRole = 'admin'; // HARD_CODE
  const config = new AppConfigurationOf(userRole);
  const language = 'ENG'; // HARD_CODE
  config.setLanguage(language);
  response.status(200).send(config);
});

module.exports = router;
