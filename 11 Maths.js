let num1 = 231
let num2 = new Number(231)
let num3 = new Number(231)
console.log(num1==num2)
console.log(num2==num3)


let num = 231.68
console.log(num.toFixed(1))
console.log(num.toPrecision(4))
console.log(num.toExponential(2))
console.log(num.toString())
console.log(typeof num.toString())
console.log(num.valueOf())


// Maths

console.log(Math.E)
console.log(Math.LN10)
console.log(Math.PI)
console.log(Math.SQRT1_2)

console.log(Math.random())
// 0<=value<10

// floor and ceil

let n1 = 23.5
console.log(Math.floor(n1))
console.log(Math.ceil(n1))

console.log(Math.floor(Math.random()*10))

// 1-10 generate value
console.log(Math.floor(Math.random()*10)+1)

// 11-20
console.log(Math.floor(Math.random()*10)+11)


//min= 40, max= 50
//(Math.floor(Math.random()*( Max - min+1 )+min));

console.log(Math.floor(Math.random()*(50-40)+40))
console.log(Math.floor(Math.random()*11)+2)

// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1))







console.log(Math.abs(-6))
console.log(Math.max(2,3,7,4))