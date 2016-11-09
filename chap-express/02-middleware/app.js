
var express = require('express');
var logger = require('./middlewares/my_logger');

var app = express();

app.use(logger);
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/blocks', function (request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

app.listen(3000, function () {
    console.log('server ready');
});