// How to create objects

const obj = {
    1: 34,
    2: 43,
    name: "Subham",
    id: 20,
    gender: "male",
    age: 25,
    "account_Nnumber": 12345,
    undefined: 23,
    null: "Rohit"
}
console.log(obj)
console.log(obj["account_Nnumber"])
console.log(obj["undefined"])
console.log(obj["null"])
console.log(typeof obj)


const arr = [20, 34, 43]
console.log(arr[1], obj[1])




// Property add
const person = new Object()

person.name = "Rahul"
person.age = 23
person.gender = "male"
console.log(person)
delete person.age
person.name = "Ravi"
console.log(person)




// Use of Class
class people {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let per1 = new people("Adi", 23, "male")
console.log(per1)




// Accesing the keys
let object = {
    name: "Vinay",
    age: 21,
}
const array = Object.keys(object)
console.log(array)

// Accessing the values
const arr1 = Object.values(object)
console.log(arr1)


// Keys and values in array format

const arr2 = Object.entries(obj)
console.log(arr2)



// Assign use case
let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}
let obj3 = Object.assign({}, obj1,obj2)
console.log(obj3, obj1)




// console.log(obj1.a)
const obj4 = {...obj1,...obj2}
console.log(obj4)



// Object.freeze()--> Makes an object completely immutable.Cannot add, delete or modify properties
const student = Object.freeze ({
    name: "Sachin",
    age: 23
})

student.city = "Delhi"
student.age = 24
console.log(student)


// Object.seal()--> Prevent adding or deleting properties, but existing property values can still be changed
const employee = Object.seal({
    name: "Vivek",
    age: 29
})

employee.age = 30
employee.city = "Delhi"
delete employee.name
console.log(employee)
