
const display = document.getElementById('display')

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let IsRunning = false;

function start(){
    if(!IsRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        IsRunning = true;
    }
}

function stop(){
    clearInterval(timer)
    elapsedTime = Date.now() - startTime; 
    IsRunning = false;
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    IsRunning = false;
    display.textContent = `00:00:00:00`
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    hours = String(hours).padStart(2, "0")
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    min = String(min).padStart(2, "0")
    let sec = Math.floor(elapsedTime / 1000 % 60);
    sec = String(sec).padStart(2, "0")
    let milisec = Math.floor(elapsedTime % 1000 / 10);
    milisec = String(milisec).padStart(2, "0")

    display.textContent = `${hours}:${min}:${sec}:${milisec}`;

}