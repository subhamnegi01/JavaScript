let obj = {}
obj.name = "Rohit"
obj.age = 23

// key value writable enumerable configurable

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// writable = true, can I change the value
obj.name = "Mohit"

// configurable


let obj2 = {}

Object.defineProperty(obj2, "name", {
    value: "Rohit",
    writable: true,
    enumerable:true,
    configurable:true
})

Object.defineProperty(obj2, "name",{
    writable: false
})
obj2.name= "Subham"
console.log(obj2)


const obj1 = {
    name: "Mohit",
    age: 20,
    account_number: 1312142
}

Object.defineProperty(obj1, "account_number",{
    writable:false
})

obj1.account_number= 43252443
console.log(obj1)



const customer ={
    name: "Rohit",
    age:34,
    account_num: 12334,
    balance:2352
}

// no change in name, account_num
Object.defineProperty(customer, "name", {
    writable:false
})

Object.defineProperty(customer, "account_num",{
    writable:false
})
customer.name = "Ravi"
customer.account_num = 234324
console.log(customer)


// Enumerable: those keys which are true, they can acces and print
//the property or key which comes from inherit has true enumerable they also access and print

Object.defineProperty(customer, "name",{
    enumerable:false
})

for(let key in customer){
    console.log(key)
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'))



// for loop does not use with array because it do not read the index, in array index are 0,1,2... but index are not string
const arr =[ 1,24,53,5,54]
arr.name= "Rahul"
arr.age = 21
for (let key in arr){
    console.log(key, arr[key])
}

//for(index= 0; index<arr.length; index++){
//    console.log(index, arr[index])
//}



// Change the enumerable to true

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'))
Object.defineProperty(Object.prototype, 'toString', {
    enumerable:true
})

for(let key in customer){
    console.log(key)
}
