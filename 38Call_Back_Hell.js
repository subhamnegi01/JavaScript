// Call back hell


// callback function
function fetchuser(callback){
    console.log("Fetching the user detail...")
    setTimeout(()=>{
        console.log("Data fetched successfully")
        const name = "John"
        callback(name)
    }, 2000)
}
function greet(name){
    console.log(`Hello ${name}`)
}

fetchuser(greet)