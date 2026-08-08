const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling and event capturing

child.addEventListener('click',()=>{
    console.log("child clicked")
},false)

parent.addEventListener('click',()=>{
    console.log("parent clicked")
},true)

grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked")
},false)