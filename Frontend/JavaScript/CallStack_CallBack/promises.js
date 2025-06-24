/// Call Back Hell ///////

// function savetoDB(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1 ;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDB(
//     "apnacollege",
//     () => {
//         console.log("Success : your data was saved");
//         savetoDB(
//             "helloworld",
//             () => {
//                 console.log("Success2 : your data 2  was saved");
//             },
//             () => {
//                 console.log("Failure : Your Data 2 was not saved , Weak Internet Connection !!")
//             }
//         )
//     },
//     () => {
//         console.log("Failure : Your Data was not saved , Weak Internet Connection !!")
//     }
// )



//// Promise //////
function savetoDB(data){
    return new Promise((resolve,reject) => {
        let internetspeed = Math.floor(Math.random()*10)+1 ;
        if(internetspeed > 4){
            resolve("Success : Data was Saved .")
        }
        else{
            reject("Failure : Data was not Saved !!")
        }
    })
}


// Promise then and catch method 
// let request = savetoDB("VivekYadav");
// request
//     .then(() => {
//         console.log("Promise was Resolved .")
//     })
//     .catch(() => {
//         console.log("Promise Was Rejected !! ")
//     })





//// Promise Chaining /////

// let request = savetoDB("VivekYadav");
// request
//     .then(() => {
//         console.log("Data 1 was saved");
//         return savetoDB("HelloWorld")
//     })
//     .then(() => {
//         console.log("Data 2 was saved");
//         return savetoDB("Helloworld2")
//     })
//     .then(()=>{
//         console.log("Data 3 was Saved")
//     })
//     .catch(() => {
//         console.log("Promise Was Rejected !! ")
//     })



// Promises chaining arguments 
let request = savetoDB("VivekYadav");
request
    .then((result) => {
        console.log("result : ",result)
        console.log("Data 1 was saved");
        return savetoDB("HelloWorld")
    })
    .then((result) => {
        console.log("result : ",result)
        console.log("Data 2 was saved");
        return savetoDB("Helloworld2")
    })
    .then((result)=>{
        console.log("result : ",result)
        console.log("Data 3 was Saved")
    })
    .catch((error) => {
        console.log("error : ",error)
        console.log("Promise Was Rejected !! ")
    })



/// Implementing Promise inn Color callback hell
h1 = document.querySelector("h1");

function changecolor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color ;
            resolve("color changed");
        },delay);
    })    
}

changecolor("red",1000)
    .then(() => {
        console.log("red color was completed");
        return changecolor("orange",1000);
    })
    .then( () => {
        console.log("orange color was completed");
        return changecolor("green",1000);
    })
    .then(() => {
        console.log("green color was completed");
        return changecolor("blue",1000);
    })
    .then(() => {
        console.log("blue color was completed");
    });
