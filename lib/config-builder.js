'use strict';

var configWritter = require('./config-writter'),
    _ = require('lodash'),
    template = require('./config-template.json'),
    defaultOptions = {
        name: 'OpenfinPOC',
        company: 'OpenFin',
        description: 'OpenFin POC',
        url: 'http://www.openfin.co',
        version: 'stable',
        uuid : Math.random().toString(36).substring(2),
        autoShow: true,
        devtools_port: 9090,
        arguments: ''
    };

function create(options, configPath, baseConfig) {
    var config = baseConfig || template;
    _.extend(defaultOptions, options);
    //create the config based on options passed.
    config.devtools_port = defaultOptions.devtools_port;

    //startup_app settings:
    config.startup_app.name = defaultOptions.name;
    config.startup_app.url = defaultOptions.url;
    config.startup_app.uuid = defaultOptions.uuid;
    config.startup_app.autoShow = defaultOptions.autoShow;

    //runtime settings
    config.runtime.version = defaultOptions.version;
    config.runtime.arguments = defaultOptions.arguments;

    //shortcut settings
    config.shortcut.company = defaultOptions.company;
    config.shortcut.description = defaultOptions.description;
    config.shortcut.name = defaultOptions.name;

    return configWritter.write(config, configPath);
}

module.exports = {
    create: create
};
