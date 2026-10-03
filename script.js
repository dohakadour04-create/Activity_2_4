// 1. VARIABLES

// var variable
var name = "Doha";

// let variable
let age = 20;

// const variable
const country = "Ireland";

// Different data types
let number = 25;                 // Number
let message = "Hello JavaScript"; // String
let isStudent = true;             // Boolean

console.log(name);
console.log(age);
console.log(country);
console.log(number);
console.log(message);
console.log(isStudent);


// 2. FUNCTIONS

// Named function
function sayHello() {
    console.log("Hello from a named function!");
}

sayHello();


// Anonymous function
let sayGoodbye = function() {
    console.log("Goodbye from an anonymous function!");
};

sayGoodbye();


// Built-in function
console.log("This is a built-in function example");


// 3. IF / ELSE STATEMENT

let temperature = 20;

if (temperature > 25) {
    console.log("It is hot.");
} else {
    console.log("It is not hot.");
}


// 4. SWITCH STATEMENT

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It is Monday.");
        break;

    case "Tuesday":
        console.log("It is Tuesday.");
        break;

    default:
        console.log("It is another day.");
}


// 5. ARRAYS

// Array of strings
let fruits = ["Apple", "Banana", "Orange"];

// Array of numbers
let numbers = [10, 20, 30, 40];

// Array of booleans
let answers = [true, false, true];

console.log(fruits);
console.log(numbers);
console.log(answers);


// 6. LOOP THROUGH AN ARRAY

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
