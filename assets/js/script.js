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

}

function checkAnswer(){

}

function calculateAnswer(){

}
