//declare the variable

let num = 10;
console.log(num);

// Primitive data types (Number, boolean, string, null, undefined, symbol, bigint) is immutable, which means their value cannot be changed once they are assigned. When you assign a primitive value to a variable, it holds the actual value. If you assign that variable to another variable, it creates a copy of the value.

//number
let account_balance = 30;
console.log(account_balance);
console.log(typeof account_balance)

//string
let str = "hello world"
console.log(str)
console.log(typeof str)

//boolean
//true or false
let statement = true;
console.log(statement)
console.log(typeof statement)

//undefined
let student
console.log(student)
console.log(typeof student)

//null
let bal = null
console.log(bal)
console.log(typeof bal)

//bigint
let a = 442783567903563409860n
console.log(a)
console.log(typeof a)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//symbol
let j = Symbol('unique');
console.log(j);

const k = Symbol('unique');
const l = Symbol('unique');

console.log(k === l); // This will print 'false' because each Symbol is unique, even if they have the same description




// Non-primitive data types (objects, arrays, functions) are mutable, which means their value can be changed after they are created. When you assign a non-primitive value to a variable, it holds a reference to the value in memory. If you assign that variable to another variable, it creates a reference to the same value.

//array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
console.log(typeof arr)

//object
//Key:Value
let obj = {
    name: "Alice",
    age: 30
}
obj.name = "Bob";
console.log(obj);

//function
let fun = function(){
    console.log("hello world!")
} 
fun()
console.log(typeof fun)
