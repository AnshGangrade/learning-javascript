// callback  = a function passed as an argument to another function
//             used to handle asynchronous operations

/*             few examples:
               1. Reading a file
               2. Network requests
               3. Interacting with a database
*/

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data);  // here displayData will be called after 5 seconds with the fetched data
    }, 5000);
}

function displayData(data) {
    console.log("Received data:", data);
}   
fetchData(displayData);

// forEach is a method that executes a provided function once for each array element.

let numbers = [1, 2, 3, 4, 5];

function square(element,index,array){
    array[index] = element * element;
}
numbers.forEach(square);

function display(element){
    console.log(element);
}
numbers.forEach(display);

let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index, array) => {
    array[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
});
fruits.forEach(display);

// .map() -> accepts a callback and applies that function to each element of an array,
//           returning a new array with the transformed elements.

const num2 = [1, 2, 3, 4, 5];

function square2(element){
    return element * element;
}
const squaredNumbers = num2.map(square2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]