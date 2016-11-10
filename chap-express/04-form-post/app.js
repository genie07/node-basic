
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencode = bodyParser.urlencoded({ extended: false });

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

app.post('/blocks', urlencode, function(request, response) {
    // TODO
    response.json('under construction..');
});

app.get('/blocks/:name', function (request, response) {
    var description = model[request.params.name];

    response.json(description);
});

app.delete('/blocks/:name', function (request, response) {
    //TODO
    response.json('under construction');
});

app.listen(3000, function () {
    console.log('server ready');
});