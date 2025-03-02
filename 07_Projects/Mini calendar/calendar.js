const now = new Date();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = document.getElementById('month')
const day = document.getElementById('day')
const date = document.getElementById('date')
const year = document.getElementById('year')

window.addEventListener('DOMContentLoaded', ()=>{
    month.textContent = now.toLocaleDateString('en-us', {month:"long"}) 
    day.textContent = weekDays[now.getDay()];
    date.textContent = now.getDate();
    year.textContent = now.getFullYear();
})

