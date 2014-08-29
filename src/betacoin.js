var async   = require('async'),
    path    = require('path'),
    fs      = require('fs'),
    svg2png = require('./svg2png.js');

var BetaCoin = function () {
    fs.readFile(path.join(__dirname, "/assets/coin.svg"), function read(err, data) {
        if (err) {
            console.error(err);
        }

        this.templateSVG = data;
    });
};

BetaCoin.prototype.createCoin = function(options, callback) {
console.error(this.templateSVG);
    // console.log(this.templatePSD.tree().export());
    // options.title = !options.title ? "" : options.title.toUpperCase();

    svg2png.convert({image: "", width: 200, height: 200}, function(err, pngBuffer) {

    });

    console.log(options.title);
};

module.exports = BetaCoin;