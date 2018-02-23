// Using the IPC provider in node.js
var net = require('net');
var Web3 = require('web3');


module.exports = function () {
    var that = this;

    that.getOpenSlots = function () {

        var web3 = new Web3(new Web3.providers.IpcProvider("\\\\.\\pipe\\geth.ipc", net));
        console.log(web3.currentProvider);
        // on windows the path is: "\\\\.\\pipe\\geth.ipc"
        // on linux the path is: "/users/myuser/.ethereum/geth.ipc"

        web3.eth.getAccounts(console.log);
        web3.eth.getBalance("0x45c5b1adf3ed9c22b2893e179cdfca7c21d16df0").then(function(res) {
            console.log('Franz');
            console.log(res);
        });
    }

    that.getProductGroups = function () {
        var pg = {};
        pg[1] = 'Tütensuppen';
        pg[2] = 'Non Food';
        pg[3] = 'Tiefkühlware';
        pg[4] = 'Food';

        return pg;
    }

    return that;
};
