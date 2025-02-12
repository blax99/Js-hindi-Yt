const choice = ["rock", "paper", "scissor"]

let player = document.getElementById('playerChoice')
let computer = document.getElementById('computerChoice')
const resultDisplay = document.getElementById('resultDisplay')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
let playerPts = 0;
let computerPts = 0;

function playGame(playerChoice){
    let result = 0;
    
    let computerChoice = choice[Math.floor(Math.random() * 3)]
    player.textContent = ` ${playerChoice}`;
    computer.textContent = ` ${computerChoice}`;

    if(playerChoice === computerChoice){
        resultDisplay.textContent = "GAME TIED! 🎮";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN! 🎉" : "YOU LOSE! 😭";
                resultDisplay.textContent = result;
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN! 🎉" : "YOU LOSE! 😭";
                resultDisplay.textContent = result;
                break;

            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN! 🎉" : "YOU LOSE! 😭";
                resultDisplay.textContent = result;
                break;
        }
    }

    resultDisplay.classList.remove('green', 'red');
    switch(result){
        case "YOU WIN! 🎉":
            resultDisplay.classList.add('green')
            playerPts++;
            playerScore.textContent = playerPts;
            break;
        
        case "YOU LOSE! 😭":
            resultDisplay.classList.add('red')
            computerPts++;
            computerScore.textContent = computerPts;
            break;
    }
    
}