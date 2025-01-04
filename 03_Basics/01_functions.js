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

function addTwoNumbers(number1, number2) {
    console.log("hello");
    return number1 + number2
    // console.log("hello");    not reachable
    
}

const result = addTwoNumbers(2 ,3)

// console.log("Result:", result);


function loginuserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Krrish"));
