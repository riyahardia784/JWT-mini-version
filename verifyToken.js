const crypto=require('crypto');
const createToken = require('./createToken');



function verifyToken(token,secret){


//split token 
const part=token.split(".");

//check the token formate
if(part.length!==3){
    console.log("invalid token formate");
    return
} 

//decode header
const decodeHeader=JSON.parse(
    Buffer.from(part[0],"base64URL").toString("utf8")
);

//decode payload
const decodePayload=JSON.parse(
    Buffer.from(part[1],"base64URL").toString("utf8")
);

// check expire
if(Date.now()>decodePayload.exp){
 console.log("expire token");
 return
}
else{
// combine them
const data=part[0]+"."+part[1];

//create new signature

const newSignature =crypto
.createHmac("sha256",secret)
.update(data)
.digest("base64URL");

// compare new signature 

if(newSignature===part[2]){
    console.log("valid")
    return{
        valid:true,
        payload:decodePayload
        
    }
}else{
    console.log("invalid");
    return{
        valid:false,
        message:"invalid token"
    }
}
}
}

module.exports=verifyToken;
