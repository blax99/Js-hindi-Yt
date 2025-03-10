function add(a, b, c){
    return a + b + c;
}

// currying
function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
const result = add(5)(4)(3)
console.log(result);

// Currying using arrow function
let Multiply = (a) => (b) => (c) => console.log(a * b * c);
Multiply(5)(2)(2)
