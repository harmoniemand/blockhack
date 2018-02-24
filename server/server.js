
var express = require('express');
var app = express();

var w3service = require("./services/web3.service");
var w3service = new w3service();


var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.get('/slots/:warehouse/:productgroup', function (req, res) {
    w3service.getOpenSlots(req.params.productgroup, req.params.warehouse).then(result => {
        res.json(result);
    });
});

app.get('/productgroups/:warehouse', function (req, res) {
    console.log(req.params.warehouse);  
    w3service.getProductGroups(req.params.warehouse).then(result => {
        res.json(result);  
    });
});

app.get('/warehouses', function (req, res) {
    w3service.getWarehouses().then(result => {
        res.json(result);  
    });
});

app.post('/acquireslots', function (req, res) {
    console.log(req.body);
    res.json({ msg: 'success'});
});


var port = process.env.PORT || 8080;
var http = require('http').Server(app);
http.listen(port, function () {
    console.log("listening on " + port);
});