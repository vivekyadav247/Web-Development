class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    work() {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

let emp1 = new Employee("Alice", 30, "Software Engineer");

let emp2 = new Employee("Bob", 25, "Data Scientist");

console.log(emp1.__proto__ === emp2.__proto__); // false, different instances

console.log(emp1.__proto__ === Employee.prototype); // true, both are instances of Employee