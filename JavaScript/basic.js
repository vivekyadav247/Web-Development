// Operations in JS
let a = 20 ;
let b = 4 ;
// Addition 
let add = a+b ;
console.log(add) ;
// Addition 
let sub = a-b ;
console.log(sub) ;
// Addition 
let mul = a*b ;
console.log(mul) ;
// Addition 
let div = a/b ;
console.log(div) ;
// Addition 
let mod = a%b ;
console.log(mod) ;


// const keyword (Use for permanent value assigned to variable)
const year = 2025 ;
console.log(year) ;


// Assignment Operator 
a += 2 ;
console.log(a);
b -= 2 ;
console.log(b);
a *= 2 ;
console.log(a);
a /= 2 ;
console.log(a);


// Unary Operator
// Post Increment and Decrement
console.log(a--);
console.log(b++);

// Pre Increment and Decrement
console.log(--a);
console.log(++b);


//Comparision Operator 
console.log(a==b) ;
console.log(a<=b) ;
console.log(a>=b) ;
console.log(a!=b) ;


//Way of Writing of Identifiers 
let bookPrice = 20 ;  // camelCase (used in javascript)
console.log(bookPrice) ;

let my_price = 20 ;  // snake_case
console.log(bookPrice) ;

let MyPrice = 20 ;  // PascalCase
console.log(bookPrice) ;


// Boolean
let isAdult = true ;
console.log(isAdult) ;


// String 
let myName = "Vivek Yadav" ;
console.log(myName) ;
// How we access letter of word using String Index
console.log(myName[0]);
console.log(myName[6]);
// Length of String
console.log(myName.length);
// Concatenation in String
let myName2 = "Vivek"+" "+"Yadav" ;
console.log(myName2) ;


// Template Literals 
console.log("The total Price : ",a+b) ;
let totalprice = `The total Price is : ${a+b}`;
console.log(totalprice);


// Conditional Statements
if(a==b){
    console.log("a is equal to b") ;
}
else if(a<b){
    console.log("a is less than b");
}
else{
    console.log("a is greater than b");
}


// Logical Operators
if(a%2==0 && a>=2){   // && Operator
    console.log("a is even and greater than b .")
}
else if(a==b || a%b==0){  // || operator
    console.log("a si divisible by b") ;
}


// Switch Statement 
let color = "red" ;
switch(color){
    case "green":
        console.log("You Can Go");
        break ;
    case "yellow":
        console.log("Ready for GO");
        break ;
    case "red":
        console.log("Stop!!")
        break ;
    default:
        console.log("Color is Not Valid") ;
}


// Alert and Prompt 

// Alert Display on Website
alert("This is Basic JavaScript");
// Error Display on Website
console.error("Error Display Check !") ;
// Warning Display on website
console.warn("Warning Check on Display") ;
// Prompt (Taking Input)
let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name"); 
let fullName = firstName + " " + lastName ;
console.log(fullName);
