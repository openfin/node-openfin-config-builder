# openfin-config-builder
[![Build Status](https://travis-ci.org/openfin/node-openfin-config-builder.svg?branch=master)](https://travis-ci.org/openfin/node-openfin-config-builder)

OpenFin-Config-Builder is a Node.js module that automates creating and updating [OpenFin](http://openfin.co/) application config files. You can read up on application config options on the [OpenFin config file API docs](https://openfin.co/application-config/).

## Install

```sh
$ npm install --save openfin-config-builder
```

## Usage

```js
var configBuilder = require('openfin-config-builder');

//you can create new config files
//configBuilder.create(configOptionsObject, configPath);
configBuilder.create({
        startup_app: {
            name: 'myAppName',
            url: 'http://www.openfin.co'
        }
    }, 'app.json').then(function (){
        console.log('Success');
    }).fail(function (err){
        console.log(err);
    });

//you can also update existing configs with updated values
//configBuilder.update(configOptionsObject, configPath);
configBuilder.update({
        startup_app: {
            name: 'staging_app',
            url: 'http://staging-app.com'
        }
    }, 'app.json').then(function (){
        console.log('Success');
    }).fail(function (err){
        console.log(err);
    });
```
### Application Config Info:
You can read up on OpenFin application config options on the [OpenFin config file API docs.](https://openfin.co/application-config/)

## License

MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/ <br/>
https://openfin.co/licensing/

[npm-url]: https://npmjs.org/package/openfin-config-builder
[npm-image]: https://badge.zx
