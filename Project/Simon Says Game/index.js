let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let purple = document.querySelector(".purple");

let useseq = [] ;
let gameseq = [] ;

let start = false ;
let level = 0;

document.addEventListener("keypress",function(){
    if(start==false){
        start = true 
        console.log("game is started");
    }

    levelup();
})


function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    })
}

function levelup(){
    level++;
    h2.innerText = `Level - ${level}`
    
    btnflash();
}