let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1.sayHello = function() {
    console.log("Hello from arr1");
}

console.log(arr1.__proto__ ) ;  // reference 
console.log(arr2.__proto__ );

console.log(Array.prototype) ; // actual object
