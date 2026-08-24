document.querySelector('button').addEventListener('click',()=>{

    const place =  document.getElementById('location').value

    function updateTemp(data){
        const element = document.getElementById('weatherInfo')
        element.innerHTML = `Todays temeperature in ${place} is ${data.current.temp_c}°C`
    }
    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=c690c2b4b7b746f895833500262208&q=${place}&aqi=no`)
    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data))

})