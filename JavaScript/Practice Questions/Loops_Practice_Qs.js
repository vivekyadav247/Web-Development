// Solutions of Q.1
let arr = [1,2,3,4,5,6,7]
let num = 3 
console.log(arr)
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1)
    }
}
console.log(arr)

// Solution of Q.2
let number = parseInt(prompt("Enter a Number")) ;
let count = 0 ;
let copy = number ;
while(copy>0){
    count++ ;
    copy = Math.floor(copy/10) ;
}
console.log(count) ;

// Solution of Q.3
number = parseInt(prompt("Enter a Number"))
let sum = 0;
while(number>0){
    sum += number%10 ;
    number = Math.floor(number/10)
}
console.log(sum)

// solution of Q.4
let fac = 7 
let factorial = 1
while(fac>=1){
    factorial *= fac 
    fac-- 
}
console.log(factorial)

// Solution of  Q.5
arr = [5,24,43,64,3,8,9,29,17]
console.log(arr)
let ans = 0;
for(let i=0; i<=arr.length ; i++){
    if(ans<arr[i]){
        ans = arr[i];
    }
}
console.log(ans)