var w3service = require("../services/web3.service");
var contracts = require('../services/contracts.abi');

var s3 = new w3service();
s3.getProductGroups('0xe91adf948970b65cde5d71a58b64f3e646986b7b').then(console.log);

// var cont = new contracts();
// cont.findContracts();