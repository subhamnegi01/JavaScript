// Variables in JavaScript

let name = "John"
let age = 30;

age = 31; // Reassigning the value of age
console.log(name, age);

const account = 1234;
console.log(account);

// Var
if(true){
    var a = 10;
}
console.log(a); // This will work because var is function-scoped, not block-scoped

function test() {
    var b = 20;
}
console.log(b); // This will throw an error because b is not defined outside the function







