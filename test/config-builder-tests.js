/*global describe, it, beforeEach, after */
'use strict';
var expect = require('chai').expect,
    mockery = require('mockery'),
    openfinConfigBuilder,
    lastPath,
    lastWrittenConfig;


describe('openfin-config-builder node module', function () {
    describe('create function', function() {

        beforeEach(function (){
            mockery.enable();
            var fsMock = {
                writeFile: function (path, config, cb){
                    lastPath = path;
                    lastWrittenConfig = config;
                    cb();
                }
            },
            pathMock = {
                resolve: function (path) {
                    return path;
                }
            };
            mockery.registerMock('fs', fsMock);
            mockery.registerMock('path', pathMock);
            openfinConfigBuilder = require('../');
        });

        after(function () {
            mockery.deregisterMock('fs');
            mockery.deregisterMock('path');
            mockery.disable();
        });

        it('should exist', function() {
            expect(openfinConfigBuilder.create).not.to.be.undefined();
        });

        it('should include default values on the config', function (){
            var template = require('../src/config-template.json');

            openfinConfigBuilder.create({}, 'filePath');

            expect(JSON.parse(lastWrittenConfig)).to.eql(template);
        });

        it('should combine both default values and passed values into the config', function () {
            var template = require('../src/config-template.json'),
            configObject = {
                intValue: 55,
                stringValue: "hello",
                arrayValue: [1,2,3,4],
                objectValue: {hi:'hi'},
                runtime : {
                    version: 'alpha'
                },
                startup_app: {
                    url:'http://www.openfin.co/index.html'
                }
            };

            openfinConfigBuilder.create(configObject, 'filepath');

            template.intValue = configObject.intValue;
            template.stringValue = configObject.stringValue;
            template.arrayValue = configObject.arrayValue;
            template.objectValue = configObject.objectValue;
            template.runtime.version = configObject.runtime.version;
            template.startup_app.url = configObject.startup_app.url;

            expect(JSON.parse(lastWrittenConfig)).to.eql(template);
        });
    });
});
