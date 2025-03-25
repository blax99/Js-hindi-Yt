const time = document.querySelector('h2')
const selectMenu = document.querySelectorAll('select')
const button = document.querySelector('#alarmBtn')
const content = document.querySelector('.content')

function clockTime(){
    const timeNow = new Date()
    let hr = timeNow.getHours()
    let AMPM = hr <= 12 ? 'AM' : 'PM'
    hr = hr >= 12 ? hr - 12 : hr 
    hr = hr.toString().padStart(2,0)
    let min = timeNow.getMinutes()
    min = min.toString().padStart(2,0)
    let secs = timeNow.getSeconds()
    secs = secs.toString().padStart(2,0)

    time.textContent = `${hr}:${min}:${secs}  ${AMPM}`
                       
    if(alarmTime == `${hr} : ${min}${AMPM}`){
        ring.play()
        ring.loop = true
    }

}
setInterval(clockTime, 1000)


let alarmTime, isAlarmSet = false, ring = new Audio('./alarm_music.mp3') 

for(let i = 12; i > 0; i--){
    i = i < 10 ? '0' + i : i
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}
for(let i = 59; i >= 0; i--){
    i = i < 10 ? '0' + i : i
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}
for(let i = 2; i > 0; i--){
    let AMPM = i == 1 ? 'AM': 'PM'
    let option = `<option value="${AMPM}">${AMPM}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML('afterend', option)
}

function setAlarm(){
    if(isAlarmSet){
        alarmTime = ''
        ring.pause()
        button.innerHTML = `Set Alarm`
        content.classList.remove('disable')
        return isAlarmSet = false;
    }
    let time = `${selectMenu[0].value} : ${selectMenu[1].value}${selectMenu[2].value}`
    if(time.includes('Hours') || time.includes('Minutes') || time.includes('AM/PM')){
        return alert('Please select a valid input!')
    }
    isAlarmSet = true
    alarmTime = time
    content.classList.add('disable')
    button.innerHTML = `Clear Alarm`
}

button.addEventListener('click', setAlarm)
