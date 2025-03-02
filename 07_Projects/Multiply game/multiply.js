const input = document.getElementById('input')
const button = document.getElementById('button')
const mul1 = document.getElementById('mul1')
const mul2 = document.getElementById('mul2')
const scorebox = document.getElementById('score')

let score = 0;

button.addEventListener('click', (e)=>{            
    
    const inputVal = input.value;
    
    if (inputVal == "") {
        window.alert('Answer box cannot be empty!')
    }
    else if(inputVal == mul1.textContent * mul2.textContent){
        score++;
        scorebox.textContent = `${score}`        
        mul1.textContent = parseInt(Math.random()*10)
        mul2.textContent = parseInt(Math.random()*10)
    } 
    else {
    mul1.textContent = parseInt(Math.random()*10)
    mul2.textContent = parseInt(Math.random()*10)
    }
})
