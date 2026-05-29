const passwordLength = 10;
const lowerCaseIncluded = false;
const upperCaseIncluded = true;
const numbersIncluded = true;
const symbolsIncluded = false;

let password = generatePassword(passwordLength, lowerCaseIncluded, upperCaseIncluded, numbersIncluded, symbolsIncluded);

console.log("generated password: " + password);

function generatePassword(length, lowerCase, upperCase, numbers, symbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let allowedChars = "";
    let password = "";

    allowedChars += lowerCaseIncluded ? lowerCaseChars : "";
    allowedChars += upperCaseIncluded ? upperCaseChars : "";
    allowedChars += numbersIncluded ? numberChars : "";
    allowedChars += symbolsIncluded ? symbolChars : "";

    if(length < 1) {
        return "Password length must be at least 1.";
    }
    if(allowedChars.length === 0) {
        return "At least one character type must be included.";
    }

    for(let i =0;i<length;i++){
        const random = Math.floor(Math.random()*allowedChars.length); 
        password += allowedChars[random];
    }

    return password;
}