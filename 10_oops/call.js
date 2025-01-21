function assignName(username) {
    this.username = username
    console.log('called');
}

function user(username, email, isLoggedIn) {
    assignName.call(this, username)
    this.email = email
    this.isLoggedIn = isLoggedIn
}

const user1 = new user('krishna', 'krrish@google.com', true)
console.log(user1);
