
const timer = document.getElementById('timer')
const target = new Date("2029-12-31T00:00:00")

function countDown(){
    const now = new Date()
    const date3 = target - now
    const days =Math.floor( date3/(1000*60*60*24))
    const hours = Math.floor(date3/(1000*60*60)%24)
    const min = Math.floor(date3/(1000*60)%60)
    const sec = Math.floor(date3/(1000)%60)
    timer.innerHTML = days + "Days" + hours + "Hours" + min + "Minutes"+ sec + "Seconds"

    timer.style.fontSize= "130px"
    timer.style.display= "flex"
    timer.style.height = "100vh"
    timer.style.justifyContent="center"
    timer.style.alignItems= "center"
}
countDown()
setInterval(countDown, 1000)
