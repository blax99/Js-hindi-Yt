// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task completed!");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("task 2 completed");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function () {
//         resolve({username: "Krishna", age: 20})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);    
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true

//         if (!error) {
//             resolve({username: "krishna", age: 21})
//         } else {
//              reject("error: something went wrong")
//         }
        
//     }, 1000)
// })

// promiseFour
// .then(function(user){
//     return user.age;
// })
// .then(function(userAge){
//     console.log(userAge);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("the promise is either resolved or rejected"));



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false

        if (!error) {
            resolve({username: "krishna", age: 21})
        } else {
             reject("error: something went wrong")
        }
        
    }, 1000)
})

// async function handlePromise() {
//     try {
//         const response = await promiseFour
//         console.log(response.username);
        
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// handlePromise()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data.location);
// })
// .catch((error) => console.log(error));
