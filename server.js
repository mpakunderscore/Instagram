let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/web')));

let server = require('http').Server(app);
const port = 8080;
server.listen(port);

let sound0 = 'ufo.mp3';
let sound26 = 'failed.mp3';

let gpio = require('./gpio');
gpio.init();

let sound = require('./sound');
sound.init(sound0);

app.get('/pins', function (request, response) {
    response.json(gpio.pins);
});

app.get('/pin/:id', function (request, response) {

    let id = request.params.id;

    if (parseInt(id) === 26) {

        gpio.pin(26, 1);
        setTimeout(function(){
            gpio.pin(26, 0);
        }, 1000);

        sound.stop();
        sound.init(sound0);

        response.json(gpio.pins);
        return;
    }

    gpio.pin(id, 1 - gpio.pins[id]);
    response.json(gpio.pins);
});
