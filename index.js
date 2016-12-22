'use strict';
var configBuilder = require('./src/config-builder.js'),
    configUpdater = require('./src/config-updater.js');

module.exports = {
    create: configBuilder.create,
    update: configUpdater.update
};
