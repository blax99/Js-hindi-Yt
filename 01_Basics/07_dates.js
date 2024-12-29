//Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

 let myCreatedDate = new Date("2024-09-12")

// console.log(myCreatedDate.toString());

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// String Interpolation `${newDate.getDate()} and the time`



console.log(newDate.toLocaleString('default',{
    weekday: "long", 
    dayPeriod: "long",
    hour12: true


}));









