function rollDice() {
    const numOfDice =  document.getElementById("dice").value;
    const diceResult = document.getElementById("result");
    const diceImg = document.getElementById("diceImg");
    let  value = [];
    let images = [];

    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        value.push(roll);
        images.push(`<img src="dice/${roll}.png" alt="Dice ${roll}">`);
    }
    diceResult.textContent = `dice value: ${value.join()}`;
    diceImg.innerHTML = images.join(" ");
}
