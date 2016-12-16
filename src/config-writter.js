'use strict';

var fs = require('fs'),
    path = require('path'),
    Q = require('q');

function write(config, configPath) {
    var configFilePath = path.resolve(configPath),
        deffered = Q.defer();

    fs.writeFile(configFilePath, JSON.stringify(config, null, '    '), function(err) {
        if (err) {
            deffered.reject(new Error(err));
        } else {
            deffered.resolve(config);
        }
    });

    return deffered.promise;
}

module.exports = {
    write: write
};
