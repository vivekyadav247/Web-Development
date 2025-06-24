let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1")
    h1.innerText = getrandomcolors() ;
    let box = document.querySelector("div")
    box.style.backgroundColor = getrandomcolors() ;
    console.log(`rgb(${getrandomcolors()}) is generated `)
})

function getrandomcolors(){
    let r = Math.floor(Math.random()*255) ;
    let g = Math.floor(Math.random()*255) ;
    let b = Math.floor(Math.random()*255) ;
    let color = `rgb(${r},${g},${b})`
    return color ;
}