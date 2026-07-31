// Scope
// Global Scope, local scope(Functional scope), block scope

// Global Scope:
// let a = 22
// var b = 32
// const c = 2134


//local scope (function scope) --> variable access only in the function, do not access outside the function
function greet(){
    let a = 10;
    var b = 32;
    const c = 324;
    console.log("Hello Coder Army")
    console.log(a,b,c)
}
greet();


// block Scope (If else....)
if(true){
    let a = 12;
    var b = 39; // var not follow block scope
    const c = 14;
}
console.log(b)



let amount = 30;
if(true){
    let amount = 56
    console.log(amount)
}
console.log(amount)


