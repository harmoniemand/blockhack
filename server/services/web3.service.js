// Using the IPC provider in node.js
var net = require('net');
var Web3 = require('web3');
var abis = require('./contracts.abi')();
var contractAdress = '0x89925ce49720c48cf5ece45d3dd1494699257573';
// var web3 = new Web3(new Web3.providers.HttpProvider('http://185.194.141.178:8545'));
// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var web3 = new Web3(new Web3.providers.HttpProvider('http://172.20.189.103:8545'));

module.exports = function () {

    var that = this;

    that.getWarehouses = function () {
        return new Promise((resolve, reject) => {
            var wareHouses = [
                { 'ID': 1, 'address': '0xe91adf948970b65cde5d71a58b64f3e646986b7b' },
                { 'ID': 2, 'address': '0x8718940f6107a8fa4f89499a483e510a41593dbc' },
                { 'ID': 3, 'address': '0x5714941f7abf6661bc4e3c53df18c99c0f7afb45' },
                { 'ID': 4, 'address': '0x151057d0709d07e81ebc892aa2ed8e21abeb7ec6' },
            ]
            resolve(wareHouses);
        });
    };

    that.getOpenSlots = function (pg, wareHouse) {
    };

    that.getProductGroups = function (wareHouse) {
        return new Promise((resolve, reject) => {

            var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);

            myContract.methods.getProductGroups().call().then(function (val) {
                ret = val;
                Object.keys(val).forEach(element => {
                    val[element] = web3.utils.hexToAscii(val[element]);
                });
                resolve(val);
            });
        });
    };



    that.acquireSlots = function (slots, date, pg, wareHouse) {
        return new Promise((resolve, reject) => {

            var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);
            return true;
            resolve(true);
        });
    }

    return that;
}
