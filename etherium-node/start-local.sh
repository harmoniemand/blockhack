geth --datadir=~/.ethereum/devchain \
--rpccorsdomain="*" \
--networkid=456719 \
--rpc \
--bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@185.194.141.178:30303" \
console 2 >> eth.log
