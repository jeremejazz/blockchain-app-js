const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')
const uuid = require('uuid')
const port = 3000;


const nodeAddress = uuid().split('-').join('');
const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/blockchain', (req,res) => {
    res.send(bitcoin)
})

app.post('/transaction', (req, res) => {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient)

    res.json({"note": `Transaction will be added to block ${blockIndex}`})
})

app.get('/mine', (req, res) =>{
    const lastBlock = bitcoin.getLastBlock();

    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };


    const pow = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress)
    const newBlock = bitcoin.createNewBlock(pow.nonce, previousBlockHash, pow.hash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    })
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))