
var express = require('express');
var app = express();


app.get('/states', function (req, res) {
    res.json({ msg: 'success' });
});


var port = process.env.PORT || 8080;
var http = require('http').Server(app);
http.listen(port, function () {
    console.log("listening on " + port);
});