'use strict';

var fs = require('fs'),
    path = require('path');

function write(config, configPath) {
    return new Promise((resolve, reject) => {
        var configFilePath = path.resolve(configPath);

        fs.writeFile(configFilePath, JSON.stringify(config, null, '    '), function(err) {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(config);
            }
        });
    });
}

module.exports = {
    write: write
};
