let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")

function changecolor() {
    this.style.backgroundColor = "blue" ;
}

btn.addEventListener("click",changecolor)
p.addEventListener("click",changecolor)
h1.addEventListener("click",changecolor)