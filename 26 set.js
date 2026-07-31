// Set -> (Remove Duplicates) Return only unique values from an array
// new-obj


const set1 = new Set([10, 20, 30, 10 ,20 ,40, 24])
console.log(set1)

//delete
set1.delete(10)
console.log(set1)


const set2 =new Set(["orange", "apple", "mango", "banana"])
let add = "orange"
console.log(set2.has(add))
set2.clear()
console.log(set2)


let set3 = new Set([12,23, 33, 24, 31, 34])
let set4 = new Set([21, 12, 11, 22, 33, 44])


// Union
let set = new Set([...set3, ...set4])
console.log(set)


// Intersection
const result = [...set3].filter((num)=>set4.has(num))
console.log(result)

for(let value of set3){
    console.log(value)
}