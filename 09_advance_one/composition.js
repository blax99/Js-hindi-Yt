function add(a, b){
    return a + b;
}

function square(val){
    return val * val;
}

function addandSquare(fn1, fn2){
    return function (a, b){
        return fn2(fn1(a, b))
    }
}

const addAndSquare = addandSquare(add, square)
console.log(addAndSquare(2, 3));


const addAndSq = (fn1, fn2) => (a, b) => fn2(fn1(a, b))
const result = addAndSq(add, square)
console.log(result(2, 4))
