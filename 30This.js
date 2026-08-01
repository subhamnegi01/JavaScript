// The this keyword in Javascript is a special keyword that refers to the context in which the current code is being executed.

// Its value depends on how the functionn where this is used is called.


// 1: Global Context (Outside any function)
// In browsers: window
// In node.js: Module's exports object
// globalThis->point global object

console.log(this)
//console.log(this==window)

//***************************************************************************************************

// 2: Inside a function
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.
// ii: Strict Mode
// this will be undefined inside a function.


function greet(){
    console.log(this)
}
greet()
//window.greet()

//***************************************************************************************************

// 3: Inside a method(object context)
// When 'this' is used inside an object's method, it refers to the object that owns the method
"use strict"
const obj ={
    name: "Rohit",
    age: 28,
    greet: function(){
        console.log(this)
    }
}
obj.greet()

// **************************************************************************************************

// Arrow functions don't have their own this.
// Insted, they inherit this from the surrounding (lexial) scope.

let obj1 = {
    name: "Sachin",
    age: 26,
    greet: ()=>{
        console.log(this)
    }
}
obj1.greet()



// Inside a constructor or class
// In constructor and classes, this refers to the intance of the object being created.

class person{
    constructor(name, age){
        this.name=name,
        this.age= age;
    }
}
let a = new person("Rahul", 21);
console.log(a)



let meet = function(){
    console.log(this)
}
meet();