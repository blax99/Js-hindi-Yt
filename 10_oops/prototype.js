let user1 = 'Anuj   '
let user2 = ' Krishna  '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

user1.trueLength()
user2.trueLength()


let heros = ['spiderman', 'thor']

let herosPower = {
    spiderman: 'web',
    thor: 'hammer',

    getDetails: function() {
        console.log(`thor power is ${this.thor}`);
    }
}

Object.prototype.callMyname = function(){
    console.log("Krishna is present in all object");
}

Array.prototype.heyKrrish = function() {
    console.log("hello krrish");
}

// herosPower.callMyname()
// // herosPower.heyKrrish()    //proto defined for array only

// heros.heyKrrish()
// heros.callMyname()


// Inheritance 

const user = {
    username: 'Arun',
    email: 'arun@google.com'
}

const teacher = {
    makeVideo: false
}

const teachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssigntment: 'JS assignment',
    fulltime: true,
    __proto__: teacher
}

// TASupport.__proto__ = user

// console.log(TASupport.makeVideo)

// modern syntax

Object.setPrototypeOf(user, teacher)   // teacher properties assigned to user
// console.log(user.makeVideo);





