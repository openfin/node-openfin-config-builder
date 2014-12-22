#openfin-config-builder
[![Build Status](https://travis-ci.org/openfin/node-openfin-config-builder.svg?branch=master)](https://travis-ci.org/openfin/node-openfin-config-builder)

> Node.js tool that builds/updates [OpenFin](http://openfin.co/) application [config files](http://openfin.co/developers.html?url=developers/api/config/overview.html)

## Install

```sh
$ npm install --save openfin-config-builder
```

## Usage

```js
var configBuilder = require('openfin-config-builder');

//you can create new config files
configBuilder.create({
        startup_app: {
            name: 'myAppName',
            url: 'http://www.openfin.co'
        }
    }, 'app.json');

//you can also update existing configs with updated values
configBuilder.update({
        startup_app: {
            name: 'staging_app',
            url: 'http://staging-app.com'
        }
    }, 'app.json');
```
###Application Config Info:
You can read up on OpenFin application config options on the [OpenFin config file API docs.](http://openfin.co/developers.html?url=developers/api/config/overview.html)

## License

MIT

[npm-url]: https://npmjs.org/package/openfin-config-builder
[npm-image]: https://badge.zx
