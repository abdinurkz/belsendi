const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const HOST = 'localhost';

server.listen(port, HOST);
