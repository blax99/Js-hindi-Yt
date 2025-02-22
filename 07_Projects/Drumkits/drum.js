const drumKits = ['crash', 'kick', 'snare', 'tom']
const btnSection = document.querySelector('.btnSection')

drumKits.forEach(kits => {
    const button = document.createElement('button')
    button.classList.add('btn');
    button.innerHTML = kits;
    button.style.backgroundImage = 'url(images/'+ kits +'.png)';
    btnSection.appendChild(button);
    const audio = document.createElement('audio');
    audio.src = `sounds/${kits}.mp3`;
    btnSection.appendChild(audio)

    button.addEventListener('click', ()=>{
        audio.play();
    })

    window.addEventListener('keydown', (event) => {
        if(event.key === kits.slice(0, 1)){
            audio.play();
        }
    })
})