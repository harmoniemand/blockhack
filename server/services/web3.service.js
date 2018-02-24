// Using the IPC provider in node.js
var net = require('net');
var Web3 = require('web3');
var abis = require('./contracts.abi')();
var contractAdress = '0x89925ce49720c48cf5ece45d3dd1494699257573';
// var web3 = new Web3(new Web3.providers.HttpProvider('http://185.194.141.178:8545'));
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


module.exports = function () {
    var that = this;

    that.getWarehouses() = function() {
        var wareHouses = {
            "employees":[
                {"Name":"Warehouse 1", "address":'0x89925ce49720c48cf5ece45d3dd1494699257573'}, 
                {"Name":"Warehouse 2", "address":'0xe628ed5cd11cd9c42b7ee0286d91be1f310fbd77'}, 
                {"Name":"Warehouse 3", "address":'0x29391653db57c32e9aad9c13a28cd70da602004b'}, 
                {"Name":"Warehouse 4", "address":'0xd23eb787686b0a6769eef34c38bd54fd91a21b36'}, 
            ]
            }
        return [,
                '',
                '',
                '']
    }

    that.getOpenSlots = function (pg, wareHouse) {

        // var web3 = new Web3(new Web3.providers.IpcProvider("\\\\.\\pipe\\geth.ipc", net));
        console.log(web3.currentProvider);
        // on windows the path is: "\\\\.\\pipe\\geth.ipc"
        // on linux the path is: "/users/myuser/.ethereum/geth.ipc"

        // web3.eth.getAccounts(console.log);
        // web3.eth.getBalance("0x45c5b1adf3ed9c22b2893e179cdfca7c21d16df0").then(function(res) {
        //     console.log('Franz');
        //     console.log(res);
        // });
    }

    that.getProductGroups = function (wareHouse) {
        var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);

        myContract.methods.getProductGroupes().call().then(function (val) {
            ret = val;
            Object.keys(val).forEach(element => {
                val[element] = web3.utils.hexToAscii(val[element]);
            });
            return val;
        });
    }

    that.acquireSlots = function (slots, date, pg, wareHouse) {
        var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);
        return true;
    }

    return that;
};
