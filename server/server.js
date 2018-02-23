
var express = require('express');
var app = express();


app.get('/states', function (req, res) {

    // Aktuellen User ermitteln (aus Authentication Header)

    // web3 starten

    // connection zu geth herstellen

    // web3 account des users verwenden

    // smart contract ausführen

    res.json({ msg: 'success' });
});


var port = process.env.PORT || 8080;
var http = require('http').Server(app);
http.listen(port, function () {
    console.log("listening on " + port);
});