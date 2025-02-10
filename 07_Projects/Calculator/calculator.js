
const dispalyText = document.getElementById('display');

function toAppend(input){
    dispalyText.value += input;
}

function toCalculate(){
    try {
        dispalyText.value = eval(dispalyText.value);
    } catch (error) {
        console.log(error);
    }
}

function toClear(){
    dispalyText.value = '';
}