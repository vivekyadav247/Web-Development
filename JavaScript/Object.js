// Creating Object Literals
const info = {
    name : "Vivek Yadav",
    Age : 18 ,
    gender : "Male"
} ;

console.log(info)

// Real World Example of Object literals
// Twitter Post Object which store
// Username , Content , likes count , repost count , tags
const Post = {
    username : "@vivek_07x",
    content : "My Learning",
    likes : 20 ,
    reposts : 2 ,
    tags : 3 
} ;
console.log(Post) ;

// How we can access or get values in Object literals
console.log(info["name"])  // first way to get values of key
console.log(info.name) // Second way to get values of key


// Add and Update Value in Object Literals
// Add
info.marks = 80 
console.log(info)
// Update 
info.Age = 18.5
console.log(info)


// Nested Objects
const students = {
    vivek : {
        nam : "Vivek Yadav" ,
        roll_no : "0805CS231171" ,
    },
    sujal : {
        nam : "Sujal Bhawsar",
        roll_no : "0805CS231144"
    },
    pushp : {
        nam : "Pushpendra Yadav",
        roll_no : "0805CS231108"
    }
}
console.log(students)


// Array of Objects
const classInfo = [
    {
        nam : "Vivek Yadav" ,
        roll_no : "0805CS231171" ,
        city : "Khalghat"
    },
    {
        nam : "Sujal Bhawsar",
        roll_no : "0805CS231144",
        city : "Nimrani"
    },
    {
        nam : "Pushpendra Yadav",
        roll_no : "0805CS231108",
        city : "Kasrawad"
    }
]
console.log(classInfo) 

// Math Object 
// Properties
console.log(Math.PI)
console.log(Math.E)
// Methods 
console.log(Math.abs(-1234))  // Modulo of given number 
console.log(Math.pow(2,5))    // second ele is power of first ele
console.log(Math.floor(1.79823))  // nearest smaller integer is output of given float
console.log(Math.ceil(1.42134))  // nearest greater integer is output of given float 
console.log(Math.random())  // Give Random Value form (0 to 1) in double

