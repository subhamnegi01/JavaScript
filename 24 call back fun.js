
// for each
let arr1 = [12, 42, 24, 42,4, 34 ]



// call back function--> make a function and send another function as an argument on it
function name(fun){
    console.log("Hello I am Name")
    fun()
}

// function greet(){
//     console.log("Hello I am call back function")
// }
// name(greet)

                       // OR


name(function greet(){
    console.log("Hello I am call back function")
})





// function fetchData(){
//     console.log("I am fetching data")
// }

// setInterval(fetchData, 5000)


let arr2 = [12, 32, 43 , 56, 85]
//  single argument= number
// second argument = index
// third argument= pass the array and modify the value
// arr.forEach(Call back function)

arr2.forEach(function(num, index,a){
    a[index]= num*2
    //console.log(num, index)
})
console.log(arr2)



// filter
let arr3 = [32,54,61,57,45]
const result= arr3.filter(function(num){
    return num%2==0
})
console.log(result)



const students = [
    {name:"Rohit", age:23, marks:88},
    {name:"ravi", age:25, marks:70},
    {name:"Rahul", age:21, marks:87},
    {name:"Pawan", age:23, marks:89},
    {name:"Aman", age:22, marks:80},
    {name:"Mohit", age:21, marks:78}
]

const res = students.filter((obj)=>obj.marks>85)
console.log(res)



//Map--> maodify the value
const arr4 = [1,2, 3, 4,5,6]
const result1 = arr4.map((num)=> num*num)

console.log(result1)



const arr5 = [1, 34, 656 ,8, 9, 5]

const result3= arr5.filter((num)=> num%2==0).map((num)=> num*num)
console.log(result3)