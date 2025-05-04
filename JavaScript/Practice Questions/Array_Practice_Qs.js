// Q.1 Solution
let q1 = [7,23,235,74,21,35,12,43]
console.log(q1)
let n = prompt("Enter n number : ")
let ans = q1.slice(0,n)
console.log(ans)

// Q.2 Solution
q1 = [7,23,235,74,21,35,12,43]
ans = q1.slice(q1.length-n)
console.log(ans)

// Q.3 Solution
let q3 = prompt("Enter any string")
if(q3.length!=0) console.log("String is not Empty")
else console.log("String is Empty")

// Q.4 Solution
let q4 = prompt("Enter a String")
let m = prompt("Enter an index")
if(q4[m]>='a' && q4[m]<='z'){
    console.log("Character of Given Index is Lower Case")
}
else {
    console.log("Character of Given Index is not Lower Case")
}
// Q.5 Solution
let q5 = prompt("Enter a String")
console.log(`Original String : ${q5}`)
console.log(`String without space : ${q5.trim()}`)

// Q.5 Solution
let q6 = [1,2,3,4,5,6]
if(q6.indexOf(5)!=-1){
    console.log("Element is Exist")
}
else {
    console.log("Element is not Exist") 
} 


