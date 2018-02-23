var w3service = require("../services/web3.service");
var contracts = require('../services/contracts');

var s3 = new w3service();
s3.getOpenSlots();
console.log(s3.getProductGroups());
s3 = undefined;
// var cont = new contracts();
// cont.findContracts();