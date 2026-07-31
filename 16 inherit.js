let user1 ={
    name : "Rohit",
    age: 23
}

let user2 = {
    amount : 2324,
    money: 3242
}

user2.__proto__ = user1

console.log(user2.name)


let arr = [10, 393, 234, 23]
console.log(arr.__proto__==Array.prototype)

console.log(arr.__proto__.__proto__== Object.prototype) //--> Shows object properties
console.log(arr.__proto__.__proto__.__proto__ == null)