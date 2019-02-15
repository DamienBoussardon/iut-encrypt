'use strict';

const SHA1 = require('sha1');

const encrytp = function (message){
    return SHA1(message);
};

module.exports = {
    encrytp
};
