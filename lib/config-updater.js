'use strict';

var configBuilder = require('./config-builder.js'),
    fs = require('fs'),
    path = require('path'),
    Q = require('Q');

function update(options, configPath) {
    //update app.json with user propmts
    var configFilePath = path.resolve(configPath),
        deffered = Q.defer();

    fs.readFile(configFilePath, function(err, data) {
        if (err) {
            deffered.reject(new Error(err));
        }
        var appConfig = JSON.parse(data);

        deffered.resolve(configBuilder.create(options, configPath, appConfig));
    });

    return deffered.promise;
};

module.exports = {
    update: update
};
