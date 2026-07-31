// Reduce

const arr = [12, 20, 30, 50, 60]

// const result = arr.reduce(call back functiion, initilization)

const result = arr.reduce((acc, curr)=>{
    console.log(acc, curr)
    acc= acc+curr;
    return acc
},0)
console.log(result)



let arr1 = ["apple", "orange", "banana", "mango", "grapes","apple", "orange", "banana", "mango", "grapes","banana", "mango", "grapes","apple"]
const result1 = arr1.reduce((acc,curr)=> {
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

    return acc;
},{})
console.log(result1)



//Count how many times each value appears. [a,a,b,c,c,c]

let arr2 = ['a', 'a', 'b', 'c', 'c', 'c']
const result2 = arr2.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++
    else
        acc[curr]=1
    return acc;
},{})
console.log(result2)
