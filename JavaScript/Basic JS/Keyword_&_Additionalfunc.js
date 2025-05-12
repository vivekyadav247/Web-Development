// This Keyword
const student = {
    name : "Vivek Yadav",
    age : 18 ,
    eng : 95,
    m1 : 83,
    m2 : 89,
    getAvg(){
        let avg = (this.eng + this.m1 + this.m2)/3 
        console.log(`${this.name} average marks is ${avg}`)
    }
}
student.getAvg()

// try and catch 
try{
    console.log(a)
}catch(err){
    console.log("Caught an error , a is not defined !!!")
    console.log(err)
}

// Arrow Function
// exaples
const sum = (a,b) => {
    return a+b ;
}
console.log(sum(34,25)) 

const cube = (n) => {
    return n ** 3 ;
}
console.log(cube(5)) 

const pow = (a,b) => {
    return a ** b ;
}
console.log(pow(34,6)) 

// Arrow Function with Implicit return
// example
const mul = (a,b) =>  a * b 
console.log(mul(3,6))

// Set Timeout
// syntax : setTimeout(function,time)
console.log("Hii bro")
setTimeout(()=>{
    console.log("Welcome !!")
},2000)
console.log("This is my havelly !")


// Set Interval
// syntax : setInterval(function,time)
let id = setInterval(() => {
    console.log("Ram Ram !")
},100) ;
console.log("Bhaiyo ")
clearInterval(id)  // this is for stooping setInterval function


// this with Arrow Function
const students = {
    name : "Vivek Yadav",
    gender : "M",
    age : 19 ,
    prop : this , // global scope
    getName : function (){
        console.log(this) 
        return this.name 
    },
    getAge : () => {
        console.log(this)
        return this.age 
    }
} 