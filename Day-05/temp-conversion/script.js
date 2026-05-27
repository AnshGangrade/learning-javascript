let tempInput = document.getElementById("tempInput")
let inUnit = document.getElementById("unitSelect")
let outUnit = document.getElementById("outputUnitSelect")
let result = document.getElementById("result")
let btn = document.getElementById("convertBtn")
let temp;

function convertTemp() {
    temp = Number(tempInput.value)
    let from = inUnit.value
    let to = outUnit.value

    console.log(temp, from, to);
    
    if (from === "C" && to === "F") {
        result.innerText = (temp * 9 / 5) + 32 + " °F"
    }else if (from === "C" && to === "K") {
        result.innerText = temp + 273.15 + " K"
    }else if (from === "F" && to === "C") {
        result.innerText = (temp - 32) * 5 / 9 + " °C"
    }    else if (from === "F" && to === "K") {
        result.innerText = (temp - 32) * 5 / 9 + 273.15 + " K"
    }    else if (from === "K" && to === "C") { 
        result.innerText = temp - 273.15 + " °C"
    }    else if (from === "K" && to === "F") {
        result.innerText = (temp - 273.15) * 9 / 5 + 32 + " °F"
    }   else {
        result.innerText = "Please select different units for conversion."
    }

}
