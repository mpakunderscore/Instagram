let express = require('express');

let app = express();

app.use('/', express.static(__dirname) + '/web');

let server = require('http').Server(app);

let io = require('socket.io')(server);

const socketPort = 8080;

server.listen(socketPort, () => console.log('socket listening on: ' + socketPort));

let api = require('./server/api')(io);

let timer = require('./server/timer');

let gpio = require('./server/gpio');

gpio.initGPIO();
