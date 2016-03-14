var path = require('path');

var OUT_DIR = path.resolve(__dirname, 'reports', 'test');

module.exports = function(config){
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'test-context.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: /node_modules/
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['mocha', 'html', 'coverage'],
        htmlReporter:{
            outputDir: OUT_DIR + '/html/'
        },
        coverageReporter:{
            reporters:[
                {
                    type:'text-summary'
                },
                {
                    type:'html',
                    dir: OUT_DIR + '/coverage'
                }
            ]
        },
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-html-reporter',
            'karma-coverage',
            'karma-webpack'
        ]
    });
};