let url = "https://catfact.ninja/fact"

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.fact);
    })
    .catch((err) => {
        console.log("Error - ",err)
    })

console.log("I am Vivek");

// if api request are processed the js code is running anpther line , because of asynchronus behaviour of promises


///// API request using fetch with Async and await keyword//////
let url1 = "https://catfact.ninja/fact"
async function getFacts(){
    try{
        let res = await fetch(url1);
        let data = await res.json();
        console.log(data);
        console.log(data.fact);

        let res1 = await fetch(url1);
        let data1 = await res1.json();
        console.log(data1);
        console.log(data1.fact);
    } catch(e){
        console.log("Error Found : ",err)
    }
    // if catch catch any error fir bhi niche wala code run hoga 
    console.log("I am vivek ")
}

getFacts();