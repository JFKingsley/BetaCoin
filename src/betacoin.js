var async = require('async'),
    path  = require('path'),
    PSD   = require('psd');

var BetaCoin = function () {
    var psd = PSD.fromFile(path.join(__dirname, "/assets/coin.psd"));

    psd.parse();

    this.templatePSD = psd;
};

BetaCoin.prototype.createCoin = function(options, callback) {

    console.log(this.templatePSD.tree().export());
    options.title = !options.title ? "" : options.title.toUpperCase();

    console.log(options.title);
};

module.exports = BetaCoin;