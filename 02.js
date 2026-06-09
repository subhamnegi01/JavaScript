// Primitive data types is immutable, which means their value cannot be changed once they are assigned. When you assign a primitive value to a variable, it holds the actual value. If you assign that variable to another variable, it creates a copy of the value.

let a = 10;
let b = a;

let str = "Hello";
str = "World";

console.log(str);

// Non-primitive data types (objects, arrays, functions) are mutable, which means their value can be changed after they are created. When you assign a non-primitive value to a variable, it holds a reference to the value in memory. If you assign that variable to another variable, it creates a reference to the same value.

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); 

let obj = {
    name: "Alice",
    age: 30
}
obj.name = "Bob";
console.log(obj);
