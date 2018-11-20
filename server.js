let express = require('express');

let app = express();

app.use('/', express.static(__dirname) + '/web');

let server = require('http').Server(app);

const socketPort = 8080;

server.listen(socketPort, () => console.log('listening on: ' + socketPort));

let sound0 = 'ufo.mp3';
let sound26 = 'failed.mp3';

let gpio = require('./gpio');
gpio.init(sound26);

let sound = require('./sound');
sound.init(sound0);
