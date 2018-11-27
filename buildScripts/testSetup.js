// This file isn't transpie, so must use CommonJS ans ES5

// Register babel to transpile before test run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
