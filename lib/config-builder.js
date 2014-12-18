'use strict';

var configWritter = require('./config-writter'),
    _ = require('lodash'),
    template = require('./config-template.json');

function create(options, configPath, baseConfig) {
    var config = baseConfig || template;

    //create the config based on options passed.
    config.devtools_port = options.devtools_port || config.devtools_port;
    //startup_app settings:
    config.startup_app.name = options.name || config.startup_app.name;
    config.startup_app.url = options.url || config.startup_app.url;
    config.startup_app.uuid = options.uuid || config.startup_app.uuid;
    config.startup_app.autoShow = options.autoShow || config.startup_app.autoShow;

    //runtime settings
    config.runtime.version = options.version || config.runtime.version;
    config.runtime.arguments = options.arguments || config.runtime.arguments;

    //shortcut settings
    config.shortcut.company = options.company || config.shortcut.company;
    config.shortcut.description = options.description || config.shortcut.description;
    config.shortcut.name = options.name || config.shortcut.name;

    return configWritter.write(config, configPath);
}

module.exports = {
    create: create
};
