
var express = require('express');
var app = express();
var w3service = require("./services/web3.service");


app.get('/states', function (req, res) {

    // Aktuellen User ermitteln (aus Authentication Header)

    // web3 starten

    // connection zu geth herstellen

    // web3 account des users verwenden

    // smart contract ausführen
    var s3 = new w3service();
    res.json(s3.getOpenSlots());
});


var port = process.env.PORT || 8080;
var http = require('http').Server(app);
http.listen(port, function () {
    console.log("listening on " + port);
});