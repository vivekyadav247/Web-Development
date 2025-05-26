// async function greet() {
//     throw "404 page not found" ;
//     return "hello !" ;
// }

// greet()
//     .then((result)=>{
//         console.log("promise was resolved");
//         console.log("result was : ",result)
//     })
//     .catch((err)=>{
//         console.log("promise was rejected with err : ",err);
//     })



/// Await keyword ////
function getnum(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10)+1 ;
            console.log(num) ;
            resolve();
        },1000)
    });
}

async function demo() {
    await getnum();
    await getnum();
    getnum();
}


// Await Keyword in Color changed////

h1 = document.querySelector("h1");

function changecolor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1 ;
            if(num>3){
                reject("promise was rejected")
            }
            h1.style.color = color ;
            console.log(`color changed to ${color}!`)
            resolve("color changed");
        },delay);
    });    
}

async function demo() {
    try{
        await changecolor("red",1000);
        await changecolor("orange",1000);
        await changecolor("green",1000);
        await changecolor("blue",1000);
    }catch(err){
        console.log("Error found ",err)
    }
    let a = 5 ;
    console.log(a);
}

demo();