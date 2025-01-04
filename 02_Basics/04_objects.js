// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Krish@google.com",
    fullname: {
        userFullname: {
            firstname: "Krishna",
            lastname: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a" ,2: "b"}
const obj2 = {3: "a" ,4: "b"}
const obj4 = {5: "a" ,6: "b"}



// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({} ,obj1 ,obj2 )

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "he@gmail.com"
    },

    {
        id: 2,
        email: "she@gmail.com"
    },
    {
        id: 3,
        email: "mee@gmail.com"
    }
]


// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}


// console.log(course.price);

const {courseInstructor : Instructor} = course

// console.log(Instructor);

/*  Json format API
{
    "coursename": "js in hindi",
    "price": 999,
    "courseInstructor": "hitesh"
}


   Array API format
[
  {},
  {},
  {}
]

*/