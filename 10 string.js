// String in JS

let str = "Hello World"
let str1 = 'Namaste India'
let str2 = `This is JS`

let price = 80
console.log(`The price of Apple is ${price}`)


// String Concatenation
let s1 = "Namaste "
let s2 = "JavaScript"
let s3 = s1+s2
console.log(s3)

// String length
console.log(s1.length)
console.log(s3.length)

// print--> "hello javascript"
console.log('"hello javascript"')

// next line
console.log("This is JavaScript. \nIt is widely used.")

//Escape Character
console.log("This is JavaScript.\\n It is widely used.")


// String Index
let special = "Harry"
console.log(special[1])
console.log(special.charAt(3))


//to lowercase
//to uppercase

console.log(special.toLowerCase())
console.log(special.toUpperCase())


// Searching in string
let hero = "Hello Coder Army Coder"
console.log(hero.indexOf("Coder"))

console.log(hero.lastIndexOf("Coder"))
console.log(hero.indexOf("coder"))
console.log(hero.includes("Coder"))


//Extracting Substrings
               //0123456789
let newstring = "Hello India"
               //-11-10-9-8-7-6-5-4-3-2-1
console.log(newstring.slice(0,3))    //last index not included

console.log(newstring.substring(0,3))

// Slice can take negative index also
console.log(newstring.slice(-7,8))

console.log(newstring.substr(6,10))


//Replacing Content

let str10= "Hello John how are you John"
console.log(str10.replace("John", "Mike"))
console.log(str10.replaceAll("John","Mike"))


// Splitting Strings
let str11 = "Money, HOney, sunny, funny"
console.log(str11.split(", "))


// Trimming
let str12= " Hello ji "
console.log(str12.trim())       // Remove the space from starting and end



//New Way to create string

let newstr= new String("Hello World")
console.log(newstr)
console.log(typeof newstr)