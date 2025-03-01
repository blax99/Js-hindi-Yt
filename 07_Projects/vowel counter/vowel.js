const input = document.getElementById('input')
const button = document.getElementById('button')
const output = document.getElementById('output')


button.addEventListener('click', ()=>{
    let inputValue = input.value;
    
    if (inputValue === '') {
        output.textContent = "Enter your text in text area!";
    } 
    else {
        let count = 0;
        for(let i = 0; i < inputValue.length; i++){
            if (inputValue[i] == 'A' || inputValue[i] == 'a'
            || inputValue[i] == 'E' || inputValue[i] == 'e' 
            || inputValue[i] == 'I' || inputValue[i] == 'i'
            || inputValue[i] == 'O' || inputValue[i] == 'o'
            || inputValue[i] == 'U' || inputValue[i] == 'u')
            {
                count++;
            }
        }
        output.innerText = `Total no of vowels are: ${count}`;
    }
})
    
