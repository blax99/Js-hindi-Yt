// function assignName(username) {
//     this.username = username
//     console.log('called');
// }

// function user(username, email, isLoggedIn) {
//     assignName.call(this, username)
//     this.email = email
//     this.isLoggedIn = isLoggedIn
// }

// const user1 = new user('krishna', 'krrish@google.com', true)
// console.log(user1);


// Bind in JS
const person = {
    fname: 'harry',
    lname: 'kane',

    getFullName: function (){
        return `${this.fname} ${this.lname}`
    }
}

const anotherPerson = {
    fname : 'Mary',
    lname : 'Jane'
}

const fullName = person.getFullName.bind(anotherPerson)
console.log(fullName());
