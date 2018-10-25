const Blockchain = require("./blockchain")

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2341, 'a23rakmdkamsdalfnal43asd4K', 'asd34g4RFAasd3');

// bitcoin.createNewBlock(13142, 'a23rakmdkamsdalfnal43asd4K', 'asd34g4RFAasd3');

// bitcoin.createNewBlock(2424, 'a23rakmdkamsdalfnal43asd4K', 'asd34g4RFAasd3');

// bitcoin.createNewBlock(1531542, '352MKFALWPRM224LS2L4', '131X34031113FF31');

// bitcoin.createNewTransaction(100,'JOHNX001314FAAA','MERY34XKDDAFAA')

// bitcoin.createNewBlock(14411, 'MSFM12312', '12312FAGA');

// bitcoin.createNewTransaction(50,'JOHNXZZ1314FAAA','MERY34XKDDAFAA')
// bitcoin.createNewTransaction(300,'JOAFX001314FAAA','MERY34XKDDAFAA')
// bitcoin.createNewTransaction(2000,'JOHNXZZ1314FAAA','MERY34XKDDAFAA')

// bitcoin.createNewBlock(31612, '011M12312', '1231FFAA');
// console.log(bitcoin.chain[2]);
const previousBlockHash = "AE22FC6EA93F9534EDF63E0D24BF1CCB6DDD875E9903DBDC0F29BC0D53B516F7"

const currentBlockData = [
    {
        amount: 10,
        sender: "NANNY2322131",
        recipient: "DF63E0D24BF1"
    },    
    {
        amount: 30,
        sender: "1ANNAGGA322131A",
        recipient: "3124VSSADF"
    },
    {
        amount: 100,
        sender: "VAD32131",
        recipient: "CVVAFASDF3341"
    },

]

console.log(bitcoin)
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));



// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

