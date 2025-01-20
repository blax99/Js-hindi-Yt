// const user = {
//     username: "Krishna",
//     age: 21,
//     isLoggedIn: true,

//     getDetails: function(details){
//         console.log(this);
        
//         console.log(this.username);
//         console.log(this.age);
//         console.log(`${details} viewed`);
        
//     }
// }

// console.log(this);
// console.log(user.username);
// console.log(user.getDetails("details"));


    function user(username, age, isLoggedIn){
        this.username = username;
        this.age = age
        this.isLoggedIn = isLoggedIn  
        
        greeting = function(){
            console.log(`${this.username}`)
        }
        return this;
        
    }

const userOne = new user('Krishna', 22, true)
const userTwo = new user('Abhishek', 25, false)
const userThree = new user('Anu', 25, false)

console.log(userOne);
console.log(userTwo);



