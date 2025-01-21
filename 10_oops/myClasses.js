class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPwd() {
        return `${this.password}***`
    }

    changeName() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user('krishna', 'krrish@gmail.com', 'krish@12')

console.log(user1.changeName());
console.log(user1);
