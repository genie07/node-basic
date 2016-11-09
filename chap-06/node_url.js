var url = require("url");

var urlString = "http://localhost:3000/trackback/1234-1234-1111";
var parsedObject = url.parse(urlString);

console.log(parsedObject);
