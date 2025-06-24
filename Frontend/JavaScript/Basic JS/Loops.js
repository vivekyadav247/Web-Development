// Loops  //

// for loops 
for(let i=0; i<=5; i++){
    console.log(i);
}

// Nested Loops
for(let i1=1; i1<=3; i1++){
    for(let j=1; j<=3; j++){
        console.log(i1,j) ;
    }
}

// while Loop
let k = 1 ;
while(k<5){
    console.log(k++);
}

// for of loops
let fruits = ["Mango","Orange","Apple"]
for(fruit of fruits){
    console.log(fruit) ;
}

// Nested For of Loop
let list = [[1,2,3],[4,5,6],[7,8,9]]
for(lis of list){
    for(num of lis){
        console.log(num)
    }
}