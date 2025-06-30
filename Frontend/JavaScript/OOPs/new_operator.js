function Person(name,age){
    this.name = name ;
    this.age = age ;
}

Person.prototype.talk = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

let p1 = new Person("Alice", 30);
let p2 = new Person("Bob", 25);

console.log(p1===p2);

console.log(p1.__proto__); 

console.log(p2.__proto__);


console.log(p1);
console.log(p2);