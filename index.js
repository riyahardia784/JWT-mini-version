const createToken=require('./createToken');
const verifyToken=require('./verifyToken');

// Test case 1 valid token
const token=createToken("this is paylod","12345");
console.log("Test 1");
console.log(token);
verifyToken(token,"12345");

// Test case 2  wrong secreat
console.log("Test 2");
verifyToken(token, "wrongsecret");

//Test case 3 invalid token formate 
console.log("test 3");
verifyToken("abc.def", "12345");

//test case 4 randome string
console.log("Test 4");
verifyToken("hello", "12345");

