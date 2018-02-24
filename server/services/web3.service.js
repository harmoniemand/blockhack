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
        var wareHouses = [
                {'Name':'Möckmühl', 'address':'0x89925ce49720c48cf5ece45d3dd1494699257573'}, 
                {'Name':'Osterfeld', 'address':'0xe628ed5cd11cd9c42b7ee0286d91be1f310fbd77'}, 
                {'Name':'Lübbenau', 'address':'0x29391653db57c32e9aad9c13a28cd70da602004b'}, 
                {'Name':'Dortmund', 'address':'0xd23eb787686b0a6769eef34c38bd54fd91a21b36'}, 
            ]
        return wareHouses
    }

    that.getOpenSlots = function (pg, wareHouse) {
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
