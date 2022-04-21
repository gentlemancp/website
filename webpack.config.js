const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './_src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js')
    },
    resolve: {
        alias: {
            '@': '.',
            '@src': path.resolve(__dirname, '_src'),
            '@utils': path.resolve(__dirname, '_src/utils'),
            '@css': path.resolve(__dirname, 'assets/css'),
        }
    }
};