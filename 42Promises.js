// async task
// weather

const Promises =  fetch('https://api.weatherapi.com/v1/current.json?key=c690c2b4b7b746f895833500262208&q=London&aqi=no')

const pro2 = Promises.then((response)=>{
    // const pro2 = response.json()

    // pro2.then((data)=>{
    //     console.log(data)
    // })
    return response.json()
})

pro2.then((data)=>{
    console.log(data)
})


// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
// console.log(error)
// })