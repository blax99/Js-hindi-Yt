class user {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`username is: ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a course is added by ${this.username}`);
        
    }
}

const teacher1 = new teacher('Arbind', 'arb@gmail,com', 'arb@123')

console.log(teacher1);
console.log(teacher1.logMe());
console.log(teacher1.addCourse());


const user1 = new user('Kundan')

console.log(user1.logMe());
// console.log(user1.addCourse());   //parent class can't access child class properties

