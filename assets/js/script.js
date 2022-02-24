/**
 * Declare constants for DOM elements
 * and choices
 */

const buttons = document.getElementById("controls");
const playerScore = document.getElementById("results-1");
const computerScore = document.getElementById("results-2");
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
const controls = document.querySelectorAll(".control");

/**
 * Add event listener to buttons
 * 
 */

controls.forEach((control) => {
    control.addEventListener("click", function(){
        const pInput = this.textContent;

        const cControls =["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const cInput = cControls[Math.floor(Math.random()* 5)];
    });
});

/**
 * compare inputs
 */
function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    // Tie check
    if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }
}

// Rock
if (pInput === "Rock") {
    if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "Lizard") {
        alert(`${currentMatch} = You Win`)
    } else {
        alert(`${currentMatch} = Computer Wins`)
    }
}
// Paper
else if (pInput === "Paper") {
    if (cInput === "Rock") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "Spock")  {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Scissors
else if (pInput === "Scissors") {
    if (cInput === "Paper") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "Lizard") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Lizard
else if (pInput === "Lizard") {
    if (cInput === "Spock") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "Paper") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Spock
else if (pInput === "Spock") {
    if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "Rock") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer wins`);
    }
}





