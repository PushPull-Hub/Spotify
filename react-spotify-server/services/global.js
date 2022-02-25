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

const replyWith404 = (request, response, next) => {
  response.status(404).send('NO PAGE FOUND FOR ' + request.url);
};

module.exports = { setHeaders, replyWith404 };
