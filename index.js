'use strict';

const fs = require('fs');
const app = require('./app.js');

const PORT = process.env.PORT || 3000;

const http = require('http').Server(app);
http.listen(PORT);

const io = require('socket.io')(http);
fs.watch(__dirname, { recursive: true }, function () {
  io.emit('file-change-event');
});
