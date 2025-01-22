// class user {
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }

//     get email() {
//         return this._email.toUpperCase()
//     }

//     set email(value) {
//         this._email = value 
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const user1 = new user('k@krrish.ai', 'abc')
// console.log(user1.email);
// console.log(user1.password);

// Eg 2

class square {

    #sideValue;

    set side(value){
        this.#sideValue = value
    }

    get side(){
        return this.#sideValue
    }
    get area(){
        return this.#sideValue ** 2
    }
    
} 

const sq = new square()
sq.side = 2
console.log(sq.side);

console.log(sq.area);
