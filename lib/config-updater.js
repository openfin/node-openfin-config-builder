'use strict';

var configBuilder = require('./config-builder.js'),
    fs = require('fs'),
    path = require('path'),
    Q = require('q');

function update(options, configPath) {
    //update app.json with user propmts
    var configFilePath = path.resolve(configPath),
        deffered = Q.defer();

    fs.exists(configFilePath, function(exists) {
        if (exists) {
            fs.readFile(configFilePath, function(err, data) {
                if (err) {
                    deffered.reject(new Error(err));
                }
                var appConfig = JSON.parse(data);

                deffered.resolve(configBuilder.create(options, configPath, appConfig));
            });
        } else {
            deffered.reject(new Error('File not found in: ' + configFilePath));
        }
    });
    return deffered.promise;
}

module.exports = {
    update: update
};
