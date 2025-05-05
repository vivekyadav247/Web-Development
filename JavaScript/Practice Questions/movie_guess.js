// Favourite Movie Guess

let movie = prompt("Guess Movie Name : ")
while(movie!="quit"){
    if(movie=="Super 30"){
        console.log("Congats , It is Corrrect Guess !")
        break ;
    }
    else{
        console.log("Please Try Again !! and You canj See the hint")
    }

    movie = prompt("Wrong Guess , Please Try Again !")
}