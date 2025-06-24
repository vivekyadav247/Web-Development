let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click",function(){
    let item = document.createElement("li")
    item.innerText = inp.value

    let delbtn = document.createElement("button")
    delbtn.innerText = "delete"
    delbtn.classList.add("delete")

    item.appendChild(delbtn)
    ul.appendChild(item)
    // console.log(inp.value)
    inp.value = ""
})

ul.addEventListener("click",function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement ;
        listitem.remove() ;
        console.log("task is deleted")
    }
})

// let delBtns = document.querySelectorAll(".delete")
// for(delbtn of delBtns) {
//     delbtn.addEventListener("click",function () {
//         console.log("element deleted")
//     });
// }