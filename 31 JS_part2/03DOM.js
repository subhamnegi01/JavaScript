const id =document.querySelector('#first')
id.innerHTML="Hello World"

const id2= document.querySelector('.header2')
id2.style.backgroundColor = "blue"


// How to iterate over Node list

//1: obj.forEach((val)=> {
//     console.log(val)
// });

// 2: for(let val of obj)
//     console.log(val)

// 3: for(i=0; i<=obj.length; i++)
//     obj[i].style.color = "red"

// Convert NodeList into array
// Array.from(obj)


// *********************************************

const obj3 = document.getElementsByTagName('h1')
console.log(obj3)


let team = document.getElementsByTagName('li')

// How to itreate over it

//for(let i = 0; i<team.length; i++)
//    team[i].style.color= "Black"

// for(let val of team)
//     console.log(val)

// Array.from(team).forEach((val)=>{
//     console.log(val)
// })



// **************************************************

// const list = document.querySelector('li')
// console.log(list)
// console.log(list.parentElement)
// console.log(list.parentNode)

const par = document.querySelector('ul')
console.log(par)
console.log(par.childNodes)
console.log(par.children)
console.log(par.firstChild)
console.log(par.firstElementChild)