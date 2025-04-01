// Immediately Invoked Function Expressions (IIFE)

//a function that is defined and executed immediately upon creation, often used to create a private scope and prevent variable pollution in the global scope

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();// if we had to write two iife function then we have to give samicolon

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Dipta')