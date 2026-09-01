// async task
// weather


// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))


fetch('https://api.weatherapi.com/v1/current.json?key=c690c2b4b7b746f895833500262208&q=London&aqi=no')
.then(response=>response.json())
.then(data=>console.log(data.current.temp_c))
.catch(error=>console.log(error))


// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
// console.log(error)
// })