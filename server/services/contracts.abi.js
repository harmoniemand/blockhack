var net = require('net');
var Web3 = require('web3');

module.exports = function () {
    var that = this;

    that.getTimeSlotManagerAbi = function () {
        var abi =
        [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_timeSlotID",
                        "type": "uint256"
                    },
                    {
                        "name": "_productType",
                        "type": "bytes32"
                    }
                ],
                "name": "getTimeSlotPrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_timeSlotID",
                        "type": "uint256"
                    },
                    {
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "name": "_productType",
                        "type": "bytes32"
                    }
                ],
                "name": "setPrice",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_productType",
                        "type": "bytes32"
                    },
                    {
                        "name": "_timeSlotID",
                        "type": "uint256"
                    },
                    {
                        "name": "_deliverant",
                        "type": "address"
                    },
                    {
                        "name": "_date",
                        "type": "bytes32"
                    }
                ],
                "name": "aquireNewTimeSlotContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_productType",
                        "type": "bytes32"
                    }
                ],
                "name": "getFreeSlots",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[10]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getProductGroups",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    },
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getSupplierTimeslots",
                "outputs": [
                    {
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            }
        ]
        return abi;
    };

    
    that.findContracts = function () {

        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        console.log(web3.currentProvider);
        // on windows the path is: "\\\\.\\pipe\\geth.ipc"
        // on linux the path is: "/users/myuser/.ethereum/geth.ipc"

        web3.eth.getAccounts(console.log);

        var myContract = new web3.eth.Contract(abi, '0x14be2783559e1c26de21338e19ee3c223891313d');
        console.log(myContract);
        console.log(myContract.options);

        console.log(myContract.methods.winningProposal());
        console.log(myContract.methods.vote(4));
    }



    return that;
};
