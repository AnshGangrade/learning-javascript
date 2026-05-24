// Built-in Math Objects

let z;
// z = Math.PI
// z = Math.E
// z = Math.round(3.56)
// z = Math.ceil(3.12)
// z = Math.floor(3.67)
// z = Math.sqrt(25)
// z = Math.pow(6,2)
// z = Math.trunc(3.62)
// z = Math.log(10)
// z = Math.sin(1.5708) // Angle is in radians, i.e 1.5708 ~ 90deg
// z = Math.cos(0)
// z = Math.tan(0.785398) 
// z = Math.random() // Generates a random number between 0 and 1
// z = Math.abs(-3)
// z = Math.sign(-5) // Returns -1 for negative numbers, 1 for positive numbers and 0 for zero
// z = Math.max(3,5,6,1,4)
// z = Math.min(3,5,6,1,4)

// console.log(z)

// IF Statement
let age = 51;
if(age>=18){
    console.log("You can drive")
}else{
    console.log("You cannot drive")
}

// If-Else
let time = 15;
if(time<12){
    console.log("Good Morning")
}else if(time<18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}

// .checked = determines whether a checkbox is checked or not
let check = document.getElementById("check");
let blue = document.getElementById("BluePill");
let red = document.getElementById("RedPill");
let submitBtn = document.getElementById("btn");
let result = document.getElementById("result");
let pillResult = document.getElementById("pillResult");

submitBtn.onclick = function(){
    if(check.checked){
        result.textContent = "GOOD!";
    }else{
        result.textContent = "CHECK ME!!";
    }

    if((red.checked || blue.checked) && !check.checked){ 
        result.textContent = "AGREE FIRST!!";
    }
    else if(blue.checked && check.checked){
        pillResult.textContent = "Blue team";
    }else if (red.checked && check.checked){
        pillResult.textContent = "Red team";
    }else{
        pillResult.textContent = "Choose a pill NOW !";
    }
}
