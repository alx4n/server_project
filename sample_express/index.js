import express from 'express';
import { helloCallback, namesRoute } from './routes.js';
const server = express();
const port = 3000;

server.get('/hello', helloCallback);
server.get('/api/calls', namesRoute);

server.listen(port, function() {
    console.log('Listening on ' + port);
});