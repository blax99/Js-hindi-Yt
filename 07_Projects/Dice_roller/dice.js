
function rollDice(){
    const diceBox = document.getElementById('diceBox').value
    const diceResult = document.getElementById('result')
    const diceImages = document.getElementById('images')
    let values = []
    let images = []
    
    for(let i = 0; i < diceBox; i++){
         const value = Math.floor(Math.random() * 6) + 1;
         values.push(value);
         images.push(`<img src='Dice_images/${value}.png' alt='dice ${value}.png'</img>`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`
    diceImages.innerHTML = `${images.join(' ')}`
}