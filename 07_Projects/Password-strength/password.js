const inputField = document.getElementById('input-box')
const outputField = document.getElementById('output-box')

inputField.addEventListener('input', ()=>{ 
    let password = inputField.value;

    if(password.length < 8){
        outputField.textContent = `password is too short`;
        outputField.style.color = 'red';
    }else{
        if(password.search(/[a-z]/) == -1){
            outputField.textContent = `password is missing a lowercase`;
            outputField.style.color = 'red';
        }
        else if(password.search(/[A-Z]/) == -1){
            outputField.textContent = `password is missing a uppercase`;
            outputField.style.color = 'red';
        }
        else if(password.search(/[0-9]/) == -1){
            outputField.textContent = `password is missing a numeric key`;
            outputField.style.color = 'red';
        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)-\+]/) == -1){
            outputField.textContent = `password is missing a special character`;
            outputField.style.color = 'red';
        }
        else{
            outputField.textContent = `password is long enough`;
            outputField.style.color = 'green';
        }
    }
})
