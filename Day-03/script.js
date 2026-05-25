// Ternary Operator
// condition ? IfTrue : IfFalse
let age = 9;
let msg = age >=18 ? "You can drive." : "You cannot drive.";
//console.log(msg);

// Switch Case
let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}

// String Methods

let str = "Bluffshot"
console.log(str.length);
console.log(str.indexOf("s"))
console.log(str.lastIndexOf("f"))
console.log(str.charAt(3))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.slice(2,5)) // 5 is not included
console.log(str.trim()) // remove's spaces from start and end of the string
str.startsWith("Bluff") // true
str.endsWith("shot") // true
str.includes("ff") // true
console.log(str.split("f")) // ["Blu", "shot"]
console.log(str.replace("shot", "yy")) // Bluffyy  there is also replaceAll()
console.log(str.repeat(3)) // BluffshotBluffshotBluffshot
console.log(str.concat(" is a company")) // Bluffshot is a company
console.log(str.padStart(15, "*")) // *****Bluffshot
console.log(str.padEnd(15, "*")) // Bluffshot*****

// Method Chaining

// No - Method Chaining
/*let username = window.prompt("Enter your username");
username = username.trim();
let letter = username.charAt(0)
letter = letter.toUpperCase();
let extraletters = username.slice(1)
extraletters = extraletters.toLowerCase();
let finalUsername = letter + extraletters;
console.log(finalUsername);*/

// Yes - Method Chaining
let username2 = window.prompt("Enter your username").trim();
let finalUsername2 = username2.charAt(0).toUpperCase() + username2.slice(1).toLowerCase();
console.log(finalUsername2);