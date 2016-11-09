
var express = require('express');
var app = express();

app.use(express.static('public'));

var model = {
    'Fixed': 'Fasten securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};


app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/blocks', function (request, response) {
    var blocks = model;
    response.json(blocks);
});

app.get('/blocks/:name', function (request, response) {
    var description = blocks[request.params.name];

    response.json(description);
});

app.listen(3000, function () {
    console.log('server ready');
});