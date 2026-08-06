function timing(){
const timer= document.getElementById('root')
const now = new Date()
const Indiantime= now.toLocaleTimeString()
timer.innerHTML= Indiantime



timer.style.fontSize= "200px"
timer.style.display= "flex"
timer.style.height="100vh"
timer.style.justifyContent= "center"
timer.style.alignItems= "center"
}
setInterval(timing,1000)
timing()