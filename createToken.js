const crypto=require('crypto');

function createToken(customData,secret){
const header={
    alg:"HS256",
    typ:"JWT"
}
// encode header
const encodedHeader= Buffer.from(JSON.stringify(header)).toString("base64URL");

const payload={
    customData,
    iat:Date.now(),
    exp:Date.now()+360000   
}

// encode payload
const encodedPayload= Buffer.from(JSON.stringify(payload)).toString("base64URL");

// create signature
const data= encodedHeader+"."+encodedPayload;

const signature=crypto
.createHmac("sha256",secret)
.update(data)
.digest("base64URL");

const token=data+"."+signature;

return token;
}



module.exports=createToken;


