/**
 * Declare Constant for DOM elements
 */
const buttons = document.getElementsByClassName("control");
const gamer1Score = document.getElementById("results-1");
const computerScore = document.getElementById("results-2");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerButton = document.getElementById("player-button");

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

}