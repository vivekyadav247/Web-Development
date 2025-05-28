let button = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random"

button.addEventListener("click",async ()=> {
    let link = await getImages();
    let img = document.querySelector("#result")
    img.setAttribute("src",link);
    img.setAttribute("height",200)
    img.setAttribute("width",200)
})



async function getImages(){
    try{
        let res = await axios.get(url);
        return res.data.message ;
    } catch(err) {
        console.log("Error Found : ",err);
        return "No Images found"
    }
}