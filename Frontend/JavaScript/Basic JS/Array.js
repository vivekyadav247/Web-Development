// Creating a Array
let arr = ["abcd",213,12.45] ;
console.log(arr) ;

// Empty Array
let arr1 = []
console.log(arr1)

// Accessing Element of Array through Index
let arr2 = [2,4,6,8,10,12,14]
console.log(arr2[0])
console.log(arr2[4])
console.log(arr2[arr2.length-1])

// We can store any element at any index.
let arr3 = ["red","pink","blue"]
console.log(arr3)
arr3[1] = "purple"
console.log(arr3)
arr3[5] = "green"
console.log(arr3)


// Array Methods //

// Push Method (Use for Add Element in Array from last)
let full_name = ["Vivek","Kumar"]
console.log(full_name)
full_name.push("Yadav")
console.log(full_name)

// Pop Method (Use for delete last element from Array and return it)
full_name.pop();
console.log(full_name)

// Unshift Method (Use for Add Element from Starting)
full_name.unshift("Mr.")
console.log(full_name)

// Shift Method (Use for Delete Element from Starting from Array)
full_name.shift()
console.log(full_name)


// Array Method with Arguments //

// includes Method (if the element is in array then this method return true)
console.log(full_name.includes("Vivek"))

// indexof Method (it finds the index of elements)
console.log(full_name.indexOf("Kumar"))

// concat Method (adding 2 array)
let ar1 = [1,2,3]
let ar2 = [10 , 8, 9]
let final_arr = ar1.concat(ar2)
console.log(final_arr)

// rreverse Method (it reverse the array)
final_arr.reverse(); // it reverse element in main arr

// slice Method  
console.log(final_arr.slice(2))
console.log(final_arr.slice(2,4))
console.log(final_arr.slice(-3))

// splice Method
// arguments in splice method (remove,removecount,items)
let sp = [1,2,3,4,5,9,8,10]
console.log(sp.splice(4)) // splice using only remove element after given index in argument reove all elements after this and return it
console.log(sp.splice(0,1)) // splice using remove and remove count(how many elements will e removed)
console.log(sp.splice(2,0,7,9)) // splice using remove , remove count and items hich we want to add

// sort Method (Using this method we sort the array , in the javascript sorting work in string)
full_name.sort()  
console.log(full_name)

// constant Arrays (After creating constant array we can change it , but we can not create new)
const arrr = [1,2,3,4,5]
arrr.push(6) 
console.log(arrr)
// arrr = [2,4,6,8,10] // Give error


/// Nested Array 
let multidimen_arr = [[1,2],[3,4],[5,6]]
console.log(multidimen_arr)
