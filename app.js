'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))

app.use(express.static(path.resolve(__dirname, 'static')));

exports = module.exports = app;
