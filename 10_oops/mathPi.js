
//  Math.PI = 5
// console.log(Math.PI);
// const value = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(value);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`chai nhi bni`)
    }
}

const value1 = Object.getOwnPropertyDescriptor(chai, 'name')
console.log(value1);

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

chai.name = 'masala chai'
console.log(chai.name);

chai.price = 50
console.log(chai.price);


console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

