'use strict';
module.exports = function(grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                reporterOutput: "",
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                src: ['Gruntfile.js']
            },
            js: {
                src: [
                    '*.js',
                    'src/*.js'
                ]
            },
            test: {
                src: ['test/**/*.js']
            }
        },
        mochacli: {
            options: {
                reporter: 'nyan',
                bail: true
            },
            all: ['test/*.js']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile', 'jsbeautifier']
            },
            js: {
                files: '<%= jshint.js.src %>',
                tasks: ['jshint:js', 'mochacli', 'jsbeautifier']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'mochacli', 'jsbeautifier']
            }
        },
        jsbeautifier: {
            files: '<%= jshint.js.src %>',
            options: {
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'mochacli', 'jsbeautifier']);
};
