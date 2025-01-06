
const user = {
    username: "Krishna",
    price: 299,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    } 
}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Krish"
//     console.log(this.username);
// }

// chai()


// ***************** Arrow function ***************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  // implicit

const addTwo = (num1, num2) => (num1 + num2) 

console.log(addTwo(2, 3));



