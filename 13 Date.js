const d = new Date()
console.log(d)
console.log(d.toDateString())
console.log(d.toString())
console.log(d.toISOString())
console.log(d.getDate())
console.log(d.getDay())          //Sun-0, Mon-1, Tue-2.........
console.log(d.getMonth())       // Jan-0, Feb-1, Mar-3.........
console.log(d.getFullYear())
console.log(d.getMilliseconds())
console.log(d.getMinutes())
console.log(d.getTime())

const now = Date.now()
console.log(now)

const D = new Date(2000324242345)
console.log(D)

const date= new Date("2000-07-26")
console.log(date)
console.log(date.toDateString())

const dt = new Date(2021,9,21,3,21,34,435)
console.log(dt.toString())


// Setting Date Components

const da = new Date()
da.getDate(20)
da.getFullYear(2021)
da.setMonth(3)
console.log(da.toString())



// Date Calculation
const d1 = new Date()
const d2 = new Date("2027-06-2")
console.log(d2-d1)       // difference between date is in millisecond



// Countdown timer
const date1 =  new Date()
const date2 = new Date("2028-07-14T00:00:00")

const date3 = date2 - date1
const days =Math.floor( date3/(1000*60*60*24))
const hour = Math.floor(date3/(1000*60*60)%24)
const min = Math.floor(date3/(1000*60)%60)
console.log(days)
console.log(hour)
console.log(min)

console.log(`Olympic CountDown Time-: Days:${days} Hour:${hour} Minutes:${min}`)




