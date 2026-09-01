let obj1 = {
    a: 1,
    b:2
}

let obj2 = obj1
// Shallow copy
obj2.a=10
console.log(obj2, obj1)

// Deep copy
let obj3 = structuredClone(obj1)
obj3.a = 20
console.log(obj3, obj1)


// Nested Object
const user = {
    name: "Rahul",
    age: 21,
    address: {
        city: "Amora",
        PIN: 263601
    }
}
console.log(user.address.PIN)

const user2 = Object.assign({},user)
console.log(user2)
user2.address.PIN= 263624
user2.name = "Mohit"
console.log(user);


// Destructing of an object

let obj = {
    name: "Rohit",
    Balance: 400,
    age: 20,
    account_num: 12344,
    arr: [23, 453, 36, 52],
    detail: {
        branch: "cse",
        year: 3
    }
}
//const {name, Balance} = obj
//console.log(name, Balance)

const {name, Balance, ...obj11} = obj
console.log(name, Balance)
console.log(obj11)


const arr = [1, 3, 43, 53, 6]
//const [first, second, ,third] =arr
//console.log(first, second, third)
const [first, second, ...third]= arr
console.log(first,second,third)


const {detail:{branch, year}} = obj
console.log(branch, year)


const {arr:[firat]}= obj
console.log(first)


let user1 = {
    name: "Rishab",
    amount: 244,
    greet : function(){
        console.log("Hello World")
    },
    meet: function(){
        return 23;
    }
}

user1.greet()
console.log(user1.meet())
