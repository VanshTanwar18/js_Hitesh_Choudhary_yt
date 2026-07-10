// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB Connected`);
})();

//()() // first is definition of the function , second is the execution of the function

((name) => {
    console.log(`DB Connected Two ${name}`);
})("Vansh")