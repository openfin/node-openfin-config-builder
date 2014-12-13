> Node.js tool that builds/updates [OpenFin](http://openfin.co/) config files


## Install

```sh
$ npm install --save openfin-config-builder
```


## Usage

```js
var configBuilder = require('openfin-config-builder');

//you can create new config files
configBuilder.create({
        name: 'myAppName',
        url: 'http://www.openfin.co'
    }, 'app.json');

//you can also update existing configs with updated values
configBuilder.update({
        name: 'staging_app',
        url: 'http://staging-app.com'
    }, 'public/app.json');
```


## License

MIT


[npm-url]: https://npmjs.org/package/openfin-config-builder
[npm-image]: https://badge.zx
