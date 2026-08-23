const arr = [1, 40, 65, 43, 34, 43, 45]
console.log(arr)
console.log(arr.length)
console.log(arr[4])


//at is latest. It take the negative index
console.log(arr.at(4))
console.log(arr.at(-6))


const newarr = arr
console.log(newarr==arr)


// StructuredClone
const newarr1 = structuredClone(arr)
console.log(newarr1 == arr)

arr.push (30)
console.log(arr)

arr.pop()
console.log(arr)
arr.pop()
console.log(arr)


// unshift, add element at start
arr.unshift(10)
arr.unshift(23)
console.log(arr)

// shift, delete element from start
arr.shift()
console.log(arr)

//delete operation
delete arr[2]
console.log(arr)

//index
console.log(arr.indexOf(65))
console.log(arr.lastIndexOf(43))

// include
console.log(arr.includes(43))


// slice
console.log(arr)
console.log(arr.slice(2,5))

// splice
//console.log(arr.splice(2,5))
//console.log(arr)

// splice (starting_index, total_element_delete, add value)
arr.splice(2,3, "rohit", 55)
console.log(arr)

//convert to string
console.log(arr.toString())

// join
console.log(arr.join("*"))


//concatenation
let arr1 = [1, 3, 46, 78]
let arr2 = [32, 23, 43, 53]
let arr4 = [324, 24,123,2321]
let arr3 = arr1.concat(arr2,arr4)
console.log(arr3)

arr1.push(arr2)
console.log(arr1)
console.log(arr1[4][1])


// 2D array

let arr2d = [[1,2,3], [4,5,6], [7,8,9]]
console.log(arr2d)
console.log(arr2d[0][2])

// 2D array --> 1 D array
let newarray = arr2d.flat()
console.log(newarray)



let arr3d = [[1,2,[4,5]]]
console.log(arr3d)
let newarr5 = arr3d.flat(Infinity)
console.log(newarr5)


// Check it is  array
let abc = [1,2,3,4,4]
console.log(Array.isArray(abc))