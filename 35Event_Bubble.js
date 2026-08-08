const grandparent = document.getElementById('garendparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling and event capturing

child.addEventListener('click',()=>{
    console.log("child clicked")
})