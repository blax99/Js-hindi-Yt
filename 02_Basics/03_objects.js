// singleton object.create()

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Krishna",
    "full name": "Krishna Chaudhary",
    [mySym]: "myKey1",
    age: 19,
    location: "Rajbiraj",
    email: "Krrish@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Sunday", "Monday"]
}


// console.log(JsUser.name);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//Object.freeze(JsUser)

JsUser.email= "Krrish@sofa.com"

// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello world, ${this.name}`);   //jsuser.name
}

console.log(JsUser.greeting());


JsUser.greetingTwo = function() {
    console.log(`Hello world, ${JsUser.email}`);   //jsuser.name
}

console.log(JsUser.greetingTwo());




