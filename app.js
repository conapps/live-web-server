'use strict';

const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get([/\/$/, /.*\.html$/], function (req, res) {
  var filename = __dirname + req.path;
  filename += filename.endsWith('/') ? 'index.html' : '';
  fs.readFile(filename, function (_, data) {
    res.send(data
      + '<script src="/node_modules/socket.io-client/dist/socket.io.js"></script>'
      + '<script>'
      + '  var socket = io();'
      + '  socket.on("file-change-event", function () {'
      + '    window.location.reload();'
      + '  });'
      + '</script>'
    );
  });
});

app.use(express.static(__dirname));

exports = module.exports = app;
