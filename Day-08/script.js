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

// Constructor = special method for defining the properties and methods of objects
function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Porsche","911",2026,"white")
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// class = (ES6 feature) provides a more structured and cleaner way to work with objects.

class Product{
    constructor(name,price){
        this.name = name,
        this.price = price 
    }
    display(){
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}

const product1 = new Product("Laptop",999);
product1.display();

// Static methods = methods that belong to the class itself, not to instances of the class
class MathUtils{
    static PI = 3.14159;
}
console.log(MathUtils.PI);  // can access static property without creating an instance of the class

class User{
    static userCount = 0;
    constructor(name){
        this.name = name;
        User.userCount++;
    }
}
const user1 = new User("Bluffy")
console.log(user1.name)
console.log(user1.userCount)  // undefined, static properties are accessed through the class, not instances
console.log(User.userCount)  