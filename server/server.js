
var express = require('express');
var app = express();
var w3service = require("./services/web3.service");

var cors = require('cors')

app.use(cors());

app.get('/productgroups', function (req, res) {
    var s3 = new w3service();
    res.json(s3.getProductGroups());
});


var port = process.env.PORT || 8080;
var http = require('http').Server(app);
http.listen(port, function () {
    console.log("listening on " + port);
});