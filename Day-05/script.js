// Array's
let fruits = ["apple","tomato","grapes"]
console.log(fruits)
console.log(fruits[0]) // can access the element by index, same cpp
fruits[1] = "banana" 

fruits.push("orange") // add element at the end of the array
fruits.unshift("mango") // add element at the beginning of the array
console.log(fruits)
fruits.pop() // remove the last element of the array
fruits.shift() // remove the first element of the array
console.log(fruits)

let length = fruits.length // length of the array
let index = fruits.indexOf("grapes") 
index = fruits.indexOf("papaya") // if element is not found, it returns -1
console.log(length,index)

// can use for loop to iterate over the array (same as cpp)

// For of loop
for(let fruit of fruits){  // for of loop to iterate over the array
    console.log(fruit)
}

fruits.sort() // sort -> aescending order
fruits.sort().reverse() // sort in descending order
fruits.reverse() // reverse the array