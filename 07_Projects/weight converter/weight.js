const input = document.getElementById('input')
const output = document.getElementById('output')

input.addEventListener('input', ()=>{
    let inputValue = input.value;
    let outputValue = inputValue * 2.2;

    output.innerHTML = outputValue.toFixed(2);
})