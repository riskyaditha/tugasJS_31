const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block{
    constructor(timestamp = "", data =[]){
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = "";
    }

    getHash() {
        return SHA256(JSON.stringify(this.data) + this.timestamp + this.prevHash);
    }
}
class Blockchain {
    constructor(){
        this.chain = [new Block(Date.now().toString())];
    }
    getlastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(block){
        block.prevHash = this.getlastBlock().hash;
        block.hash = block.getHash();

        this.chain.push(block);
    }
}

const eduChain = new Blockchain();
eduChain.addBlock(new block(Date.now().toString(), ["Hello Builders3"]));
console.log(educhain.chain);
