// Function 

// Create a function to prnt poem 
function poem(){
    console.log("Twinkle, twinkle, little star,")
    console.log("How I wonder what you are!")
    console.log("Up above the world so high,")
    console.log("Like a diamond in the sky.")
}
poem() ;


// Create a Function to roll a dice & always display the value of the dice (1 to 6)
function dice(){
    let roll = Math.floor(Math.random()*6+1) ;
    console.log(roll)
}
dice()


// Function With Arguments 
function info(name,age){
    console.log(`I am ${name}, and my age is ${age}`)
}
info("Vivek Yadav",19)


// Create a function that gives average of given 3 numbers
function avg(a,b,c){
    let avrg = (a+b+c)/3 ;
    console.log(avrg)
}
avg(1,2,3)


// Create a function for creating multiplication  table  of a number
function table(n){
    for(let i=1; i<=10; i++){
        console.log(n*i) 
    }
}
table(2)


// return in function
function sum(a,b){
    return a+b ;
}
console.log(sum(4,29))

// Create a function that returns the sum of numbers of 1 to n
function sumofn(n){
    let sum = 0 
    for(let i=1; i<=n; i++){
        sum += i 
    }
    return sum 
}
console.log(sumofn(6))


// Create a function that return the concatenation of all string in an array
let str = ["Hello ","Vivek ","Yadav"];
function concat(str1){
    let result = "";
    for(let i=0; i< str1.length; i++){
        result += str1[i];
    }
    return result ;
}
console.log(concat(str))


