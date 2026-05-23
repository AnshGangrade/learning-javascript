console.log(`Hello`);
console.log('World');
// window.alert('Alert');

//Variables = Container's used to store data values 

// data type = number
let x = 123;
console.log(x);
console.log(`we have a number ${x}.`);
console.log(typeof x);

// data type = string
let name = "BluffShot"
console.log(typeof name)
console.log(`I use ${name} as name in Games.`);

// data type = booleans
let online = true;
let offline = false;
console.log(typeof online)

//arithmetic operators = operands (values,variables) and operators (+, -, *, /, %)
let a = 10;
a = a + 1;
a = a - 1;
a = a * 2;
a = a / 2;
a = a ** 2; // this is exponentiation operator, it raises the first operand to the power of the second operand
a = a % 3; // modulues op, return remainder.

// can also be written as 
a += 1; // a = a + 1
a **= 2; // a = a ** 2, and so on..

//increment and decrement operators
a++; // a += 1
a--; // a -= 1
console.log(a); 

/*
Operator Precedence 
1. Parentheses ()
2. Exponentiation **
3. Mult * , Div / , Mod %
4. Addition + , Subtraction -
5. Assignment =, +=, -=, *=, /=, **=, %=
6. Increment ++ , Decrement --
*/
// we solve it left to right, but parentheses are solved first.

let equatn = 1 + 2 * 3 + 4 ** 2;
/* it'll go like
1. 4 ** 2 = 16
2. 2 * 3 = 6
3. 1 + 6 + 16 = 23
*/
console.log(equatn);

/* Accepting user input
1. Easy Way = window.prompt()
2. Professional Way = HTML
*/
// Easy Way
// let username = window.prompt('What is your name?');
// console.log(username);

// Professional Way
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}

// Type Conversion
let p = 2;
p = String(p);
console.log(p, typeof p);

let q = '0';   // 0->false, 1->true, but any non-empty string is true.
q = Boolean(q);
console.log(q, typeof q);

let r = "123";
r = Number(r);
console.log(r, typeof r);

// ways to declare variables
let xyz = "Alice"; // let is block scoped, can be reassigned but cannot be redeclared in the same scope.
const PI = 3.14; // constant variable, cannot be reassigned.
var age = 25; // var is function scoped, can be reassigned and redeclared.