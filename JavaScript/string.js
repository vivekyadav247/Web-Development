// Trim Method of String 
let a = "   Hello   " ;
console.log(a.trim());
console.log(a) ;


// toLowerCase() and toUpperCase() Method of String
let str = "Vivek" ;
console.log(str.toLowerCase()) ;
console.log(str.toUpperCase()) ;
console.log("original : ",str) ;


// Method Chaining
// write method with method is called chaining
console.log(a.trim().toUpperCase());


// String Method with Arguments

// indexOf(arg)
console.log(str.indexOf("V"));  // index of p 
console.log(str.indexOf("ve"));  // index of first word of value
console.log(str.indexOf("z"));  // return -1 if value is not found

// slice(arg)
let str1 = "ILoveCoding";
console.log(str1.slice(1,5));
console.log(str1.slice(5));
console.log(str1.slice(-2));

// replace(arg)
console.log(str1.replace("Love","do"));
console.log(str1.replace("o","x"));
str1 = "apnaapna" ;
console.log(str1.replace("apna","college")) ;

// repeat(arg)
console.log(str.repeat(4));