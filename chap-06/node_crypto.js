var crypto = require("crypto");

var secret = "secretKey I love sha256 hash";
var output = crypto.createHmac("sha256", secret).update("Password~~").digest("hex");

console.log("Password~~ : ", output);
