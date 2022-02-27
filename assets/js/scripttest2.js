const result = document.getElementById("winner-is");
let [gamer_result, comp_result] = [0,0];

let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let comp_choice = choices[randomNumber];

    console.log(randomNumber);
    document.getElementById("gamer1-choosen").innerHTML = `<p>${input}</p>`;
    document.getElementById("computer-choosen").innerHTML = `<p>${comp_choice}</p>`;

    console.log('input', input, 'comp-choice', comp_choice);

    switch(gameRules[comp_choice][input]) {
        case 'win':
            result.innerText = `You Win`;
            gamer_result++;
            break;
        case 'lose':
            result.innerText = `You lose`;
            comp_result++;
            break;
        case 'draw':
            result.innerText = `You draw`;
            break;
        }
        document.getElementById('gamer_result').innerHTML = gamer_result;
        document.getElementById('comp_result').innerHTML = comp_result;

        if(gamer_result === 5) {
            alert('You won the match');
        } else if(comp_result === 5) {
            alert("Computer won the match");
        }

}