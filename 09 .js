// Primitive data type VS non-premitive data type

//Primitive data type: Immutable
//Non-Primitive data type : Mutable

let a = 10
let b= a
b = 20
console.log(b)
console.log(a)

let obj1 = {
    id:20,
    name: "rohit"
}

let obj2 = obj1

obj2.id = 30

console.log(obj1)
console.log(obj2)

