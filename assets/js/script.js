/**
 * Declare constants for DOM elements
 * and choices
 */

const buttons = document.getElementById("control");
const playerScore = document.getElementById("results-1");
const computerScore = document.getElementById("results-2");
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

/**
 * Add event listener to buttons
 * 
 */

for (let button for buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Main game function
 */
function playGame(playerChoice) {
let computerChoice = Math.floor(Math.random()* 3);

let result = checkWinner(choices[computerChoice], choices[playerChoice]);

updateScores(result);

}





