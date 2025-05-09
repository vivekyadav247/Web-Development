// Solution of Q.1
const sqr = (n) => {
    return n ** 2 ;
}
console.log(sqr(5))

// Solution of Q.2
// let id = setInterval(()=>{
//     console.log("Hello World !")
// },2000)

// setTimeout(()=>{
//     clearInterval(id)
//     console.log("interval is cleared")
// },10000)

// Solution of Q.3
let arr = [1,2,3,4,5,6,7]
const avg = (arr) => {
    let arrayavg = 0 
    for(let i=0; i<arr.length; i++){
        arrayavg += arr[i]
    }
    arrayavg = arrayavg/arr.length ;
    return arrayavg ;
}
console.log(avg(arr))

// SOlution of Q.4
let x = 8 ;
const isEven = (x) => x%2==0 ;
console.log(isEven(x))