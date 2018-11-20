let api = require('./api');

let Omx = require('node-omxplayer');

let sounds = [];

exports.play = function (name) {

    api.broadcastLog('play ' + name);

    let omxplayer = Omx('/home/pi/instagram/sounds/' + name);
    sounds.push(omxplayer);
};

exports.play = function (name, volume) {

    api.broadcastLog('play ' + name);

    let omxplayer = Omx('/home/pi/instagram/sounds/' + name, 'local', false, volume);
    sounds.push(omxplayer);
};

exports.stop = function () {

    console.log("sounds length " + sounds.length);

    for (let i = 0; i < sounds.length; i++) {

        if (sounds[i].running)
            sounds[i].quit();
    }

    sounds = [];
};
