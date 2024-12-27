// Primitive

// 7 datatypes: string, number, boolean, null, undefined, symbol, BigInt

const score = 10.3
const outTemp = null

let id = Symbol('123')
let anotherid = Symbol('123')

console.log(id === anotherid);
console.log(score);



//Non Primitive (Refrence)

// Array ,object , function

const heroes = ["Spiderman","Batman","Superman"]

let obj = {
    name : "Krrish",
    age : 22
}


const myFunc = function (){
    console.log("Hello world");   
}

console.log(typeof myFunc);



//***********************************************************

// stack (Primitive)

let myName = "Krishna"
let myAnothername = myName
myAnothername = "Krrish"

console.log(myAnothername);
console.log(myName);


// Heap (Non primitive)

let userOne = {
    email: "one@gmail.com",
    upi: 12345
}

let userTwo = userOne

userTwo.email = "two@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);

