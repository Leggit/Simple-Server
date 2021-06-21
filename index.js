const express = require("express");
const app = express();
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || argv.p || 3000;

app.use(express.static("dist"));

app.listen(port, function () {
    console.log("Node Express server for listening on http://localhost:" + port);
});