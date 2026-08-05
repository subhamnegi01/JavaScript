// <li>TS<li>
function attach(content){
const par = document.getElementById('root')

let element= document.createElement('li')
element.innerHTML= content;
par.appendChild(element)
// par.append(element)          //-->attach multiple element
}
attach("TS")
attach("React")

//**************************************************** */
// Create Text node
const text = document.createTextNode("Hello India")
const par = document.getElementById('root')
par.append(text)


// ********************Attribute Node *************************

// const element = document.createAttribute("id")
// element.value = "first"

// const curr_li = document.querySelector('li')
// curr_li.setAttributeNode(element)


// access to second list

// const parent = document.getElementById("root")
// parent.children[1].setAttributeNode(element)



// access attribute of a element

// const element = document.getElementById("root")
//console.log(element.getAttribute("id"))

// element.setAttribute("custom", "20")
// element.removeAttribute("custom")



// ******************** Add nodes in a DOM **********************

// const parent = document.getElementById('root')
// const element = document.createElement('li')
// element.innerHTML= "DSA"

// // parent.prepend(element)

// const child2 = parent.children[1]
// parent.insertBefore(element, child2)


// const parent = document.getElementById("root")

// const element = document.createElement("div")
// element.innerHTML = "Hello Coder Army"


// // parent.insertAdjacentElement("beforebegin", element)
// parent.insertAdjacentElement("afterend", element)