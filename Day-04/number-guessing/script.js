const max = 100;
const min = 50;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomNumber);
let attempts = 0;
let runnin = true;

while (runnin) {
    let input = window.prompt(`Guess a number between ${min} and ${max}`)
    if (input === null) {
        window.alert("Game cancelled");
        running = false;
        break;
    }
    input = Number(input);


    if (isNaN(input)) {      // isNaN checks if number is NaN
        window.alert("Enter a Number")
    } else if (input > max || input < min) {
        window.alert("Enter the number in correct bounds")
    } else {
        attempts++;
        if (input > randomNumber) {
            window.alert("Your Guess is High");
        } else if (input < randomNumber) {
            window.alert("Your Guess is low");
        } else {
            console.log(`You guessed it correctly num was ${input}, it took you ${attempts} attempts.`)
            runnin = false;
        }
    }

    /*if (input === randomNumber) {
        console.log(`You guessed it correctly num was ${input}, it took you ${attempts} attempts.`)
        runnin = false;
    } else {
        attempts++;
    }*/
}