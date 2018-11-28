'use strict';

var configBuilder = require('./config-builder.js'),
    fs = require('fs'),
    path = require('path');

function update(options, configPath) {
    return new Promise((resolve, reject) => {
        //update app.json with user propmts
        var configFilePath = path.resolve(configPath);

        fs.exists(configFilePath, function(exists) {
            if (exists) {
                fs.readFile(configFilePath, function(err, data) {
                    if (err) {
                        reject(new Error(err));
                    }
                    var appConfig = JSON.parse(data);

                    resolve(configBuilder.create(options, configPath, appConfig));
                });
            } else {
                reject(new Error('File not found in: ' + configFilePath));
            }
        });
    });
}

module.exports = {
    update: update
};
