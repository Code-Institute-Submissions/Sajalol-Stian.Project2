/**
 * Declare constants for DOM elements
 * and choices
 */
console.log('connected!');
const playerScore = document.getElementById("results-1");
const computerScore = document.getElementById("results-2");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const controls = document.querySelectorAll("btn btn-lg btn-success");

/**
 * Add event listener to buttons
 * 
 */

controls.forEach((control) => {
    control.addEventListener("click", function () {
        const pInput = this.textContent;

        const cControls =["rock", "paper", "scissors", "lizard", "spock"];
        const cInput = cControls[Math.floor(Math.random()* 5)];

        compareInputs(pInput, cInput);
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


// Rock
if (pInput === "rock") {
    if (cInput === "scissors") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "lizard") {
        alert(`${currentMatch} = You Win`)
    } else {
        alert(`${currentMatch} = Computer Wins`)
    }
}
// Paper
else if (pInput === "paper") {
    if (cInput === "rock") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "spock")  {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Scissors
else if (pInput === "scissors") {
    if (cInput === "paper") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "lizard") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Lizard
else if (pInput === "lizard") {
    if (cInput === "spock") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "paper") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer Wins`);
    }
}

// Spock
else if (pInput === "spock") {
    if (cInput === "scissors") {
        alert(`${currentMatch} = You Win`);
    } else if (cInput === "rock") {
        alert(`${currentMatch} = You Win`);
    } else {
        alert(`${currentMatch} = Computer wins`);
    }
}
}




