function sayMyname() {
console.log("K");
console.log("R");
console.log("I");
console.log("S");
console.log("H");
}

// sayMyname()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 3)
// addTwoNumbers(2 ,"a")

// function addTwoNumbers(number1, number2) {
//     console.log("hello");
//     return number1 + number2
//     // console.log("hello");    not reachable
    
// }

const result = addTwoNumbers(2 ,3)

// console.log("Result:", result);


// function loginuserMessage(username) {
    // if (username === undefined) {   if(!username)       
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginuserMessage("Krrish"));

function calculateCartPrice(val1, val2, ...num1) {     //rest or spread operator
    return num1
}

// console.log(calculateCartPrice(200, 300 , 400, 1000));

const user = {
    username: "Krishna",
    price: 199
}


function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);    
}

// handleObject(user)

handleObject({
    username: " Sam",
    price: 299
})


const myArray = [100, 200, 300 ,400]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray));

