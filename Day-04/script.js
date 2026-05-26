// Logical Operators
// AND (&&) - true if both operands are true
// OR (||) - true if at least one operand is true
// NOT (!) - true if the operand is false

// = assignment operator
// == comparison operator (compares if values are equal, not types)
// === strict equality operator (compares if values and types are equal)
// != inequality operator
// !== strict inequality operator

const a = 5;
if(a==="5"){    // a=="5" gives true
    console.log("a is equal to 5");
}else{
    console.log("a is not equal to 5");
}

// While loop
let b = 3;
while(b > 0){
    console.log(b);
    b--;
}
// there is also do-while loop which executes the block of code at least once before checking the condition

// For loop
for(let i = 0; i < 5; i++){
    if(i === 2){
        continue;   // continue skips this iteration, while break would exit the loop
    }
    console.log(i);
}

// Functions - section of reusable code.

function hello(username){
    console.log(`Hi, ${username}!`);
}
hello("Bluff");

// Variable Scope - where a variable is accessible (global vs local scope)
let x = 10;  // global scope
function test(){
    let y = 20;  // local scope to the function
    console.log(x); // can access global variable           
}
test();
console.log(y); // ReferenceError: y is not defined, because y is in local scope of test() function
