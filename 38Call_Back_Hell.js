// Call back hell


// callback function
function fetchuser(){
    console.log("Fetching the user detail...")
    setTimeout(()=>{
        console.log("Data fetched successfully")
        const obj = {
            name: "John",
            age: 23,
            city: "New York"
        }
        printAge(obj)
    }, 2000)
}
function greet(obj){
    console.log(`Hello ${obj.name}`)
}
function meet(obj){
    console.log(`Hello ${obj.name}, nice to meet you!`)
}

function printAge(obj){
    console.log(`user ${obj.age} years old`)
}

// fetchuser(greet)
fetchuser(meet)