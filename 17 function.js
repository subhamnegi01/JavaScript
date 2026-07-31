// Function

function greet(){
    console.log("Hello World")
    console.log("this ia JS")
}
greet()


// Sum program
//parameter
function sum(num1, num2){
    console.log(num1 + num2)
}
// function call, argument
sum(3,4)


// Multiplication
function multiply(num1,num2){
    return num1 * num2
}
let result = multiply(3,4)
console.log(result)




const fun = function(){
    console.log("Hello Coder Army")
}
fun()




// Arrow function
const fun1 = ()=>{
    console.log("JS")
}
fun1()


//sum
const sum1 = (num1, num2)=> num1 + num2
console.log(sum1(2,2))


//cube
const cube = number => number*number*number
console.log(cube(8))


// rest operator
const sum2 = function(...number){
    console.log(number)
}
sum2(2,3,4)



let obj = {
    name : "Rohit",
    age: 30,
    amount: 429
}
// function love (obj1){
//     obj1.name = "Sam"
//     console.log(obj1)
// }
// love(obj)

function fun2({name, amount}){
    console.log(name, amount)
}
fun2(obj)


