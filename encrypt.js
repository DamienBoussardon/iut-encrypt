'use strict';

const SHA1 = require('sha1');

const encrypt = function (message){
    return SHA1(message);
};

module.exports = {
    encrypt
};
