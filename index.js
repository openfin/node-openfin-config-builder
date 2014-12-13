'use strict';
var configBuilder = require('./lib/config-builder.js'),
    configUpdater = require('./lib/config-updater.js');

module.exports = {
    create : configBuilder.create,
    update : configUpdater.update
};
