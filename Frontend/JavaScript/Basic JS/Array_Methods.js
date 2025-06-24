// for each function
let arr = [53,23,67,98,21]
// arr.forEach(function (ele){
//     console.log(ele)
// })

// or

// let print = function(ele){
//     console.log(ele)
// }
// arr.forEach(print)

// or

arr.forEach((ele)=>{
    console.log(ele);
})


// Map 
let double = arr.map(function(ele){
    return ele*2 ;
})
console.log(double)


// Filter 
let filt = arr.filter((ele)=> (ele%2==0))
console.log(filt)

// every
let ever = arr.every((ele)=> (ele%2==0))
console.log(ever)

// some
let som = arr.some((ele)=> (ele%2==0))
console.log(som) 

// Reduce Method
let res = arr.reduce((sum,ele) => sum += ele )
console.log(res)

// example of reduce method
// find max from Array
let maxi = arr.reduce((max,ele)=>{
    if(max<ele) return ele ;
    else return max;
})
console.log(maxi)


// Default parameters
// if we have only one parameters, it is executed 
// because of default parameters , if we pass 
// two parameters then b take passed parameters

function mul(a,b=2){      
    return a*b ;
}
console.log(mul(4)) 
console.log(mul(4,4))


// Spread 
// expands an iterable into multiple values
arr = [1,2,3,4,5,6]
console.log(...arr)

console.log(Math.min(...arr))


// Spread eith Array Literals
// copy array using spread
let newArr = [...arr]
console.log(newArr)

let chars = [..."HELLO"]
console.log(chars)


// Spread with Object literals
let data = {
    email : "vivekyad240706@gmail.xom",
    password : "1234567"
}

let newData = {...data,id:2407}
console.log(newData)


/// Rest 
// Allow a function to take an indefinite number of arguments and bundle them in an array
function sum (...args){  //...args coonvert arguments in array
    return args.reduce((res,ele)=>res+=ele)
}


// Destructuring 
// Storing values of array into multiple Variables
let particip = ["Vivek","Ritu","Kundan","Ravi"]
let [winner,runnerup] = particip ;
console.log(winner,runnerup)

// Destructuring with objects
const stu = {
    name : "Vivek Yadav",
    class : "CS-B",
    Age : 19 ,
    username : "vivek_07x",
    password : "1234"
}
const {username : user , password : pass} = stu 
console.log(user)
