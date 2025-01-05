

// let  e = 50
// console.log(e);



if (true) {
    let a =  10
    const b = 20
    var c = 30   // have global scope ,can cause error
    // console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// function one() {
//     const username = "krishna"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

//     // console.log(website);
    
//     // two()
// }

// console.log(username);


if (true) {
    const username = "Krrish"
    if (username === "Krrish") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)    //child can access parent property
}


// *************** interesting ******************


addOne(8)
function addOne(num) {
    return num + 1
}





// console.log(addTwo(2))   // throw error
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(2))
