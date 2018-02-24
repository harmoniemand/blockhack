// Using the IPC provider in node.js
var net = require('net');
var Web3 = require('web3');
var abis = require('./contracts.abi')();
var contractAdress = '0x87e45f56dd4fa459562ae5831b4a6f2673cc660f';
var web3 = new Web3(new Web3.providers.HttpProvider('http://185.194.141.178:8545'));
// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8080'));
// var web3 = new Web3(new Web3.providers.HttpProvider('http://172.20.189.103:8545'));

module.exports = function () {

    var that = this;

    that.getWarehouses = function () {
        return new Promise((resolve, reject) => {
            // var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);

            // myContract.methods.getWarehouses().call().then(function (val) {
            //     val.forEach(element => {
            //         console.log(element);
            //     });
            //     resolve(val);
            // });

            var wareHouses = [
                { 'ID': 1, 'address': '0xede7e1368978b49215911bdb89203bb563fffdc3' },
                { 'ID': 2, 'address': '0x81be5f1f599e4e557eff6cf89b2cd8185c15f372' },
                { 'ID': 3, 'address': '0x07d3ccd823c3d065e82ebd16af2e1ce346238d39' },
                { 'ID': 4, 'address': '0x67b9102472c8b0b678904f2c1ab86b184b7612f8' },
            ]
            resolve(wareHouses);
        });
    };

    that.getOpenSlots = function (pg, wareHouse) {
        return new Promise((resolve, reject) => {
            var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);
            myContract.methods.getFreeSlots(web3.utils.fromAscii(pg))
            .call().then(function (val) {
                resolve(val);
            });
        });
    };

    that.getProductGroups = function (wareHouse) {
        return new Promise((resolve, reject) => {

            var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);

            myContract.methods.getProductGroups().call().then(function (val) {
                Object.keys(val).forEach(element => {
                    val[element] = web3.utils.hexToUtf8(val[element]);
                });
                resolve(val);
            });
        });
    };

    that.acquireSlots = function (slots, date, pg, wareHouse) {
        return new Promise((resolve, reject) => {

            var myContract = new web3.eth.Contract(abis.getTimeSlotManagerAbi(), wareHouse);
            resolve(true);
        });
    }

    return that;
}
