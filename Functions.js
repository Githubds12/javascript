function greetMessage() {
    console.log("Hello from GeeksforGeeks!");
}

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to GeeksforGeeks.`);
}

greetUser("Prakash"); // Output: Hello, Prakash! Welcome to GeeksforGeeks.

function greetUser(name, city) {
    console.log(`Hello, ${name}! Welcome to GeeksforGeeks. Thank you for joining from ${city}.`);
}

greetUser("Prakash", "Mumbai"); // Output: Hello, Prakash! Welcome to GeeksforGeeks. Thank you for joining from Mumbai.

function calculateSum(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateSum(1, 10)); // Output: 55


/*
Advanced Function Concepts
In advanced JavaScript, functions can become more complex and powerful. Here are some advanced concepts:

Higher-Order Functions
Functions that take other functions as arguments or return functions are called higher-order functions.

Closures
A closure is a function that retains access to its outer scope even after the outer function has returned.

First-Class Functions
In JavaScript, functions are first-class citizens. This means functions can be assigned to variables, passed as arguments, and returned from other functions.
*/

let anonymousFunction = function() {
    console.log("Hello from GeeksforGeeks!");
};

let greet = function() {
    console.log("Hello from GeeksforGeeks!");
};

greet(); // Output: Hello from GeeksforGeeks!
/*
greet(); // Error: Cannot access 'greet' before initialization

let greet = function() {
    console.log("Hello from GeeksforGeeks!");
};
*/
/*
let greet = function greetMessage() {
    console.log("Hello from GeeksforGeeks!");
};

greet(); // Output: Hello from GeeksforGeeks!

*/
/*
Calling the Named Function
While you can call the named function using the variable it is assigned to, trying to call the function by its name outside of its scope will result in an error.

greetMessage(); // Error: greetMessage is not defined
*/

let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120

//CallBack Functions
setTimeout(function() {
    console.log("This is a callback function!");
}, 1000);

(function() {
    console.log("IIFE executed immediately!");
})();

// Button
/*
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
*/

// Regular Function Expression
let calculateSum = function(x, y) {
    return x + y;
};

console.log(calculateSum(12, 4)); // Output: 16

// Arrow Function Expression
let calculateSum = (x, y) => {
    return x + y;
};

console.log(calculateSum(12, 4)); // Output: 16

// Simplified Arrow Function Expression
let calculateSum = (x, y) => x + y;

console.log(calculateSum(12, 18)); // Output: 30

// Single Paramter Example
let calculateSum = (x, y) => x + y;

console.log(calculateSum(12, 18)); // Output: 30

// No Parameter
/*
let greet = () => console.log("Hello from GFG!");

greet(); // Output: Hello from GFG!
*/

// Arrow Function and Lexical `this`
/*One of the most significant differences between arrow functions and regular functions is how they handle the this keyword.
 Arrow functions do not have their own this context; 
they inherit this from the surrounding non-arrow function or the global context. */
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` refers to the Person object
        console.log(this.age);
    }, 1000);
}

let p = new Person();

// Advanced Arrow Function Example
let calculateSumOrDifference = (x, y) => {
    if (x > y) {
        return x + y;
    } else {
        return x - y;
    }
};

console.log(calculateSumOrDifference(31, 12)); // Output: 43
console.log(calculateSumOrDifference(11, 12)); // Output: -1

// Using ternary operators
/*
let calculateSumOrDifference = (x, y) => x > y ? x + y : x - y;

console.log(calculateSumOrDifference(31, 12)); // Output: 43
console.log(calculateSumOrDifference(11, 12)); // Output: -1
*/

/*

Best Usage and Practices
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked!");
});

*/

// Array methods
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(x => x * x);

console.log(squares); // Output: [1, 4, 9, 16, 25]