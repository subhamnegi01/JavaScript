// Variables in JavaScript

// let name = "John";
// let age = 30;

// age = 31; // Reassigning the value of age

// console.log(name, age); 

// const account = 1234;
// console.log(account);

// Var

// if(true){
//     var a = 10;
// }
// console.log(a); // This will work because var is function-scoped, not block-scoped

// function test() {
//     var b = 20;
// }
// console.log(b); // This will throw an error because b is not defined outside the function


// Data Types in JavaScript

// primitive data types

// number, string, boolean, null, undefined, bigint, symbol

// number
let a = 42;
let b = 3.14;

console.log(a, b);

// string
let c = "Hello, World!";
let d = 'JavaScript is fun.';
console.log(c, d);

// boolean
let e = true;
let f = false;
console.log(e, f);

// undefined

let g;
console.log(g); // This will print 'undefined' because g has not been assigned a value

// null
let h = null;
console.log(h); // This will print 'null' because h is explicitly set to null   

// bigint
let i = 9007199254740991n;
console.log(i);

// symbol
let j = Symbol('unique');
console.log(j);

const k = Symbol('unique');
const l = Symbol('unique');

console.log(k === l); // This will print 'false' because each Symbol is unique, even if they have the same description 



// non-primitive data types

// object, array, function.

// array

let arr = [10,20,30,"Rahul", true];
console.log(arr);


// object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(person);

// function

function add(){
    console.log("This is a function");
}
add();

let sum = function name(){
    console.log("This is a function expression");
}
sum();




