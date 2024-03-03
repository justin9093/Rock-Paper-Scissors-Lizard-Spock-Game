const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-score");
const choices = ["rock, paper , scissors, lizard, spock"];

document.addEventListener("DOMContentLoaded", function(){
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute ("data-choice");
            playGame(playerChoice);
        });
    }
       
})

function playGame(){
    
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.scr = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScore(result);
}

function checkWinner(){

}

function updateScore(){

}
