let list = [];
let entry = prompt("Enter ");
while(true){
    if(entry=="Quit"){
        console.log("Quitting App")
        break ;
    }

    if(entry=="List"){
        for(let i=0; i<list.length; i++){
            console.log(`${i+1}. ${list[i]}`)
        }
    }
    else if(entry=="Add"){
        list.push(prompt("Enter your Task"))
        console.log("Task is Added Successfully !")
    }
    else if(entry=="Del"){
        console.log(`Task is deleted : ${list.pop()}`)
    }
    else{
        console.log("Invalid Entry!")
    }

    entry = prompt("Enter Options ");
}