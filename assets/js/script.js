const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("human-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerWinner = document.getElementById("winner")
let playerPoints = 0;
let computerPoints = 0;


document.addEventListener("DOMContentLoaded", function(){
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute ("data-choice");
            playGame(playerChoice);
        });
    }
       
})

function playGame(playerChoice){

    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = choices[playerChoice];

    const computerChoice = choices[Math.floor(Math.random() * 5)];

    computerImage.src = `assets/images/${computerChoice}.png`;
    computerImage.alt = choices[computerChoice];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === ("scissors", "lizard")) ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "paper":
                result = (computerChoice === ("rock", "spock")) ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "scissors":
                result = (computerChoice === ("paper", "lizard")) ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "lizard":
                result = (computerChoice === ("paper", "spock")) ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "spock":
                result = (computerChoice === ("scissors", "rock")) ? "YOU WIN!" : "YOU LOOSE";
                break;
        }
    }
    playerWinner.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerPoints++;
            playerScore.textContent = playerPoints;
            break;
        case "YOU LOOSE":
            computerPoints++;
            computerScore.textContent = computerPoints;
            break;
    }
}
