'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server.js');

const binaryMimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'image/jpeg',
    'image/png',
    'text/css',
    'text/html',
    'text/javascript'
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

exports.handler = (event, context) => {


    return awsServerlessExpress.proxy(server, event, context);
};