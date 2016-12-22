'use strict';

var configWritter = require('./config-writter'),
    _ = require('lodash'),
    template = require('./config-template.json');

function create(options, configPath, baseConfig) {
    var config = baseConfig || template;

    //extend config the options object
    _.chain(options)
        .keys()
        .forEach(function(key) {
            //if the config does not have the key or if its a value we simply copy it.
            if (!config[key] || typeof options[key] !== 'object') {
                config[key] = options[key];
                //if its an object we extent it.
            } else {
                _.extend(config[key], options[key]);
            }
        });

    //add a random uuid if none exists:
    if (config.startup_app && !config.startup_app.uuid) {
        config.startup_app.uuid = config.startup_app.name + '-' + Math.random().toString(36).substring(2);
    }

    return configWritter.write(config, configPath);
}

module.exports = {
    create: create
};
