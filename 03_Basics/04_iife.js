//  Immediately Invoked Function Expression

(function chai() {
    // named IIFE
    console.log(`DB connected.`);
})();


((username) => {
    console.log(`Hello, ${username}`);
})("Krishna")
