let Omx = require('node-omxplayer');

let sounds = [];

let interval;

exports.init = function (sound0) {

    interval = setInterval(startDay(sound0), 1000 * 60 * 5);
};

function startDay(sound0) {
    exports.stop();
    let omxplayer = Omx('/home/pi/instagram/sounds/' + sound0, 'local', false, 0);
    sounds.push(omxplayer);
}

exports.play = function (name) {

    let omxplayer = Omx('/home/pi/instagram/sounds/' + name);
    sounds.push(omxplayer);
};

exports.play = function (name, volume) {

    let omxplayer = Omx('/home/pi/instagram/sounds/' + name, 'local', false, volume);
    sounds.push(omxplayer);
};

exports.stop = function () {

    console.log("sounds length " + sounds.length);

    clearInterval(interval);

    for (let i = 0; i < sounds.length; i++) {

        if (sounds[i].running)
            sounds[i].quit();
    }

    sounds = [];
};
