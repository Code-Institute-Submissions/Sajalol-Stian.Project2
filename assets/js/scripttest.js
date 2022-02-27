/**
 * Declare Constant for DOM elements
 */
const buttons = document.getElementsByClassName("control");
const gamer1Score = document.getElementById("results-1");
const computerScore = document.getElementById("results-2");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerButton = document.getElementById("player-button");
const computerButton = document.getElementById("computer-Button");

/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

/**
 * The main game function
 */
function playGame(playerChoice) {
    playerButton.button = choices[playerChoice];
    
    function computerChoice() {
        return choices[Math.floor(Math.random()* 5)];
    } 

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);


}

/**
 * check who the winner is
 */
function compareInputs(computerChoice, playerChoice) {
    const currentMatch = `${computerChoice} vs ${playerChoice}`;

    // Tie check

    if (computerChoice === playerChoice) {
        alert(`${currentMatch} is a Tie`);
        return;
    }

    // Rock

    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            alert(`${currentMatch} = You win`)
        } else if (computerChoice === "lizard") {
            alert(`${currentMatch} = You Win`)
        } else {
            alert(`${currentMatch} = Computer Wins`)
        }
    }

}
