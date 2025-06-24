// Solution of Question no.1
let input = document.createElement("input");
let button = document.createElement("button");

document.querySelector("body").append(input)
document.querySelector("body").append(button)

button.innerText = "Click Me"
input.placeholder = "Enter input"


// Solution of Question no.2
button.setAttribute("id","btn")
input.setAttribute("placeholder","Username")


// Soltuion of Question no.3
let btn = document.querySelector("#btn")
btn.classList.add("btnStyle")


// Solution of Question no.4
let h1 = document.createElement("h1")
document.querySelector("body").append(h1)
h1.innerHTML = "<u>DOM Practice</u>"
h1.style.color = "purple" 


// solution of Question no. 5 
let p = document.createElement("p")
p.innerHTML = "Apna college <b>Delta</b> Practice"
document.querySelector("body").append(p)
