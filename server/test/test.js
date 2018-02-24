var w3service = require("../services/web3.service");
var contracts = require('../services/contracts.abi');

var s3 = new w3service();
console.log(s3.getProductGroups('0xe628ed5cd11cd9c42b7ee0286d91be1f310fbd77'));

// var cont = new contracts();
// cont.findContracts();