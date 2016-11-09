var url = require("url");
var querystring = require("querystring");

var urlString = "http://localhost:3000/read?articleId=15602";
var parsedObject = url.parse(urlString);

console.log(querystring.parse(parsedObject.query));
