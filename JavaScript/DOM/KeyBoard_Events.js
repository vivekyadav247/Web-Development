let inp = document.querySelector("input");

inp.addEventListener("keypress",function(event){
    console.log("key = ",event.key);
    console.log("key code = ",event.code);
    console.log("keywas pressed");
})