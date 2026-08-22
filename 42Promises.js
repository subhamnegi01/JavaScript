// async task 
// weather

const Promise =  fetch('https://api.weatherapi.com/v1/current.json?key=c690c2b4b7b746f895833500262208&q=London&aqi=no')
Promise.then((response)=>{
    console.log(response);
}).catch((error)=>{
console.log(error)
})