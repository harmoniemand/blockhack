var w3service = require("../services/web3.service");
var contracts = require('../services/contracts.abi');

var s3 = new w3service();
//s3.getProductGroups('0xe91adf948970b65cde5d71a58b64f3e646986b7b').then(console.log);

s3.getWarehouses('0x87e45f56dd4fa459562ae5831b4a6f2673cc660f').then(function (wareHouses) {
    wareHouses.forEach(element => {
        var _pgs;
        console.log(element);
        s3.getProductGroups(element['address']).then(function (pgs) {
            Object.keys(pgs).forEach(pg_elem => {
                s3.getOpenSlots(pg_elem, element['address']);
            })
        });

    });
});

// s3.getOpenSlots(pg, wareHouse)
// s3.acquireSlots(slots, date, pg, wareHouse)
