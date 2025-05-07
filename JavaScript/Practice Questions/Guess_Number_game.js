const max = prompt("Enter the Max Number : ");
const random = Math.floor(Math.random()*max+1) ;
let guess = prompt("Guess a Number : ")
while(true){
    if(guess=="quit"){
        console.log("Quitting the Guess Game")
        break ;
    }

    if(guess==random){
        console.log("Your Guess is Right , Congratulation !!")
        break ;
    }
    else{
        guess = prompt("Wrong Guess, Please Try Again !!")
        console.log("Wrong Guess, Please Try Again !!")
    }
}