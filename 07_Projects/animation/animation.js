const span = document.querySelectorAll('span')
console.log(span);

span.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active')
    })
})