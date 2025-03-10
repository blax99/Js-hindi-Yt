const body = document.querySelector('body')
const inputEl = document.getElementById('dark-mode')
const labelEl = document.getElementById('label')


inputEl.addEventListener('input', ()=>{
    changeTheme()
    updateLocalStorage()
})

function changeTheme(){
    if(inputEl.checked){
        body.style.backgroundColor = `black`;
    }else{
        body.style.backgroundColor = `white`;
    }
}