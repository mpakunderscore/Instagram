let sound = require('./sound');

let Gpio = require('onoff').Gpio;

let pinsArray = [5, 6, 12, 13, 16, 19, 20, 21, 26];

let buttons = {};

exports.pins = {};

exports.init = function () {

    for (let i = 0; i < pinsArray.length; i++) {
        exports.pins[pinsArray[i]] = 0;
        buttons[pinsArray[i]] = new Gpio(pinsArray[i], 'out');
        buttons[pinsArray[i]].writeSync(0);
    }

    // let gpio26 = new Gpio(26, 'in', 'both');

    // sound2.watch(function (err, value) {
    //
    //     if (value === 0)
    //         sound.play(sound26)
    // });
};

exports.pin = function (id, value) {

    exports.pins[id] = value;
    buttons[id].writeSync(value);
};
