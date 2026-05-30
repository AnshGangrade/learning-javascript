// .filter() -> creates a new array by filtering out elements
let nums = [1, 2, 3, 4, 5, 6];
function isEven(element){
    return element % 2 === 0;
}
let evenNums = nums.filter(isEven);
console.log(evenNums); 

// .reduce() -> reduces the elements of an array to a single value
let prices = [5,35,25,60];
function sum(previous, next){
    return previous + next;
}
let totalPrice = prices.reduce(sum);
console.log(totalPrice);
 
// FUNCTION EXPRESSIONS -> a way to define functions as values, assign to variables
let squares = nums.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);
// arrow function -> a concise syntax for writing function expressions
// (parameters) => expression     

let hello = (name) => console.log(`Hello, ${name}`);
hello("Bluff");

setTimeout(()=>console.log("Hello after 3 seconds"),3000);
// good for short func

// Object = A collection of related properties and/or methods
const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    work: "Krusty Krab",
    draw: function(){console.log("prefect circle...⭕")}
}
console.log(person.firstName); 
console.log(person.work); 
person.draw();

// this keyword -> refers to the current object
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    work: "Under the rock",
    draw: function(){console.log(`${this.firstName} is drawing...`)}
}
person2.draw();