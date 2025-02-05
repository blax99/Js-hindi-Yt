const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

let temp;
submitBtn.addEventListener('click', function(){
    if (toFahrenheit.checked) {
        temp = Number(textBox.value)
        temp = (temp * 9 / 5) + 32;
        result.innerHTML = temp.toFixed(1) + ' °F';
    } 
    else if(toCelsius.checked){
        temp = Number(textBox.value)
        temp = 5 / 9 * (temp - 32);
        result.innerHTML = temp.toFixed(1) + ' °C';
    }
    else{
        result.textContent = `Please select a unit !`;
    }
}) 