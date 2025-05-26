function hello(){
    console.log("inside hello fnx")
    console.log("Hello");
}

function demo(){
    console.log("Calling the hello function")
    hello();
}

console.log("Calling demo function")
demo();

console.log("Done")

// Viduslizing call Stack
function one(){
    return 1 ;
}

function two(){
    return one() + one() ;
}

function three(){
    let ans = two() + one() ;
    console.log(ans);
}

three();