const app = require('./app');
const http = require('http');
const debug = require('debug')('node-angular');
const moment = require('moment');

const normalizePort = (value) => {
  const port = parseInt(value, 10);
  return isNaN(port) ? value : port >= 0 ? port : false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ';
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const onListening = (address = server.address()) => {
  const bind =
    typeof address === 'string'
      ? 'the pipe: ' + address
      : 'the port: ' + address.port;
  debug('Listening on ' + bind);
  console.log(
    'Listening on ' +
      bind +
      ', Time on the server: ' +
      moment().format('h:mm:ss A')
  );
};

const server = http.createServer(app);

server.on('listening', onListening);
server.on('error', onError);
server.listen(port);
