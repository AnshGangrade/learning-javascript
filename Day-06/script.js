// spread operator = ... (three dots)
// allows array or string to be expanded

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(numbers); // NaN
max = Math.max(...numbers); // 5
console.log(max);
console.log(...numbers)

let fruits = ['apple', 'orange', 'banana'];
let newFruits = ['grape', ...fruits, 'kiwi'];
console.log(newFruits);

// Rest parameters = ... (three dots) - allows a function to accept an indefinite number of arguments as an array
// bundles serparate elements into an array
function openFridge(...food) {
    console.log(food);
}
let food1 = "milk";
let food2 = "eggs";
let food3 = "juice";    
openFridge(food1, food2, food3); 

// spread operator can also be used to copy an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

// combining strings
function combineStrings(...strings) {
    return strings.join(' ');
}
let name = combineStrings("Mr.","Bluff","shot","is","Bluffy ")
console.log(name);
