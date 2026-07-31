// Map--> Map is a collection of key - value pairs where both the keys and the value can be any data type (primitive or object)

// key value pair -: key should be unique
//const map1 = new Map()
// map1.set(3, 20)
// map1.set("rohit", 34)
// map1.set(20,"Mohit")
// console.log(map1)

// console.log(map1.size)

const map2 = new Map ([[4,"Rohit"],["mohit",70],[30,90],[60,58]])
for(let [key,value] of map2)
    console.log(key,value)



// Object:
// keys: string or symbol

// maps:
// keys: number, string, object etc