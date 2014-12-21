/*global describe, it, beforeEach, after */
'use strict';
var expect = require('chai').expect,
    mockery = require('mockery'),
    openfinConfigBuilder;

describe('openfin-config-builder node module', function () {
    describe('update function', function() {

        beforeEach(function (){
            mockery.enable();
            var fsMock = {
                writeFile: function (path, config, cb){
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

        it('should exist', function (){
            expect(openfinConfigBuilder.update).not.to.be.undefined();
        });
    });
});
