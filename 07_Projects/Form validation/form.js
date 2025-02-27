const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const gender = document.querySelector('.gender')
const button = document.getElementById('submitBtn')
const error = document.querySelector('.error')


function setError(element, message){
    const parentEl = element.parentElement;
    const errorMsg = parentEl.querySelector('.error')
    errorMsg.innerText = message;

    parentEl.classList.add('errorArea')
    parentEl.classList.remove('successArea')
    return false;
}

function setSuccess(element){
    const parentEl = element.parentElement;
    const errorMsg = parentEl.querySelector('.error')
    errorMsg.innerText = '';

    parentEl.classList.add('successArea')
    parentEl.classList.remove('errorArea')
}

function checkValid(){
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()
    
    if(usernameValue === ''){
        setError(username, "*username cannot be empty")
    }else{
        setSuccess(username)
    }

    if(emailValue === ''){
        setError(email, "*email cannot be empty")
    }else{
        setSuccess(email)
    }

    if (gender.checked) {
        setSuccess(gender)
    }else{
        setError(gender, "*select a gender")
    }
    
    if(passwordValue === ''){
        setError(password, "*password cannot be empty")
    }else if(passwordValue.length < 8){
        setError(password, "*password is too short")
    }
    else{
        setSuccess(password)
    }

    if(password2Value === ''){
        setError(password2, "*password cannot be empty")
    }
    else if(password2Value !== passwordValue ){
        setError(password2, "*password did not match")
    }
    else{
        setSuccess(password2)
    }
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkValid();
})

