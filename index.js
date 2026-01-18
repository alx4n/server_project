const express = require('express')
const server = express()
const port = 3000

server.get('/hello', function (req, res) {
    res.send('My name is Alex');
});

server.listen(port, function() {
    console.log('Listening on ' + port);
});