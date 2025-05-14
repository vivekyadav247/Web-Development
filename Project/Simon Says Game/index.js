let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let purple = document.querySelector(".purple");

let userseq = [] ;
let gameseq = [] ;

let btns  = ["yellow","green","red","purple"];

let start = false ;
let level = 0;

document.addEventListener("keypress",function(){
    if(start==false){
        start = true 
        console.log("game is started");
    }

    levelup();
})

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level - ${level}`

    let randmidx = Math.floor(Math.random()*3);
    let randmcolor = btns[randmidx];
    let randmbtn = document.querySelector(`.${randmcolor}`);
    gameseq.push(randmcolor);
    console.log(gameseq);
    gameFlash(randmbtn);    
    
}


function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("user")
    setTimeout(function () {
        btn.classList.remove("user")
    },250)
}

function userInp(){
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id")
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns){
    btn.addEventListener("click",userInp)
}

function checkAns(idx) {
    // let idx = level - 1 ;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq){
            setTimeout(levelup,1000)
        }
    } 
    else{
        h2.innerHTML = `Game Over , Your scare was <b>${level}</b> !<br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function reset(){
    start = false ;
    level = 0;
    gameseq = [] ;
    userseq = [] ;
}
