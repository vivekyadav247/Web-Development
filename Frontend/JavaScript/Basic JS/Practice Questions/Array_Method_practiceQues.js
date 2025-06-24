// Solution of Question 1 
let arr = [2,3,4,55,64,75,21]

let square = arr.map((ele) => ele*ele)
console.log(square)

let sum = square.reduce((res,ele)=> res+ele)
console.log(sum)

let avg = sum/arr.length ;
console.log(avg);



// solution of question 2
arr = [2,32,3,12,34,21,43,18]
let res = arr.map((ele)=>ele+5)
console.log(res)


// Solution of Q.3 ,
arr = ["adam","cat","bob","Pushpi","high"]
let res3 = arr.map((string)=>string.toUpperCase())
console.log(res3)


// Solution of Question 4
const doubleAndReturnArgs = (arr,...args)  => [
    ...arr,...args.map((variables) => variables*2),
]
let res4 = doubleAndReturnArgs([1,2,3],4,5)
console.log(res4)


// Solution of Question 5
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2})
let obj = mergeObjects({a:1,b:2},{c:3,d:4})
console.log(obj)