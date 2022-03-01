const setHeaders = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
};

const configs = {
  applinks: {
    apps: [],
    details: [
      {
        appID: 'TEAMID.com.gigroup.myplatform.it.mobilecandidate',
        paths: ['*'],
      },
    ],
  },
};

const replyWith404 = (request, response, next) => {
  response.status(404).send('NO PAGE FOUND FOR ' + request.url);
};

const replyWithAWelcomingPage = (request, response, next) => {
  response.status(200).send('WELCOME TO THE SERVER ' + request.url);
};

const replyWithAAppleConfigurationFile = () => {
  response.status(200).send(configs);
};

module.exports = {
  setHeaders,
  replyWith404,
  replyWithAWelcomingPage,
  replyWithAAppleConfigurationFile,
};
