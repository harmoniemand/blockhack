var net = require('net');
var Web3 = require('web3');

module.exports = function () {
    var that = this;

    that.getProductGroupAbi = function () {
        var abi =
            [
                {
                    "constant": true,
                    "inputs": [],
                    "name": "winningProposal",
                    "outputs": [
                        {
                            "name": "_winningProposal",
                            "type": "uint8"
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
                            "name": "to",
                            "type": "address"
                        }
                    ],
                    "name": "delegate",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "toVoter",
                            "type": "address"
                        }
                    ],
                    "name": "giveRightToVote",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "toProposal",
                            "type": "uint8"
                        }
                    ],
                    "name": "vote",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "name": "_numProposals",
                            "type": "uint8"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                }
            ];
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
