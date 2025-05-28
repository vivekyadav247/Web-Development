let button = document.querySelector("button");
button.addEventListener("click",async ()=> {
    let res = await getFacts();
    let p1 = document.querySelector("#result")
    p1.innerText = res.fact ;
})

let url = "https://catfact.ninja/fact"

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data ;
    } catch(err) {
        console.log("Error Found : ",err);
        return "No fact found"
    }
}