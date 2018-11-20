let sound = require('./sound');

let Gpio = require('onoff').Gpio;

exports.pins = {};

let pinsArray = [5, 6, 12, 13, 16, 19, 20, 21];

exports.init = function (sound26) {

    for (let i = 0; i < pinsArray.length; i++) {
        exports.pins[pinsArray[i]] = 0;
        let button5 = new Gpio(pinsArray[i], 'out');
        button5.writeSync(exports.pins[pinsArray[i]]);
    }

    let sound2 = new Gpio(26, 'in', 'both');

    sound2.watch(function (err, value) {

        if (value === 0)
            sound.play(sound26)
    });
};
