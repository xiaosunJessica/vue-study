var express = require('express');
// var path = require('path');
var webpack = require('webpack');
var history = require('connect-history-api-fallback');
var webpackMiddleware = require('webpack-dev-middleware');

var webpackConfig = require('./webpack.config.js');

var app = express();
var compiler = webpack(webpackConfig);


// compile assets in-memory and serve them
var devMiddleware = webpackMiddleware(compiler, {
  quiet: true,
  index: 'index.html'
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

app.use(history());
app.use(devMiddleware);
app.listen(8082);
