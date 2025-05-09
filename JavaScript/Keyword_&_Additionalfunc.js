// This Keyword
const student = {
    name : "Vivek Yadav",
    age : 18 ,
    eng : 95,
    m1 : 83,
    m2 : 89,
    getAvg(){
        let avg = (this.eng + this.m1 + this.m2)/3 
        console.log(`${this.name} average marks is ${avg}`)
    }
}
student.getAvg()

// try and catch 
try{
    console.log(a)
}catch(err){
    console.log("Caught an error , a is not defined !!!")
    console.log(err)
}

// 