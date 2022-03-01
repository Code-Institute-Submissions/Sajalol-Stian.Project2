const result = document.getElementById("winner-is");
let [gamer_result, comp_result] = [0,0];

let rules = {
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
};

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let comp_choice = choices[randomNumber];

    console.log(randomNumber);
    document.getElementById("gamer1-choosen").innerHTML = `<i>${input}</i>`;
    document.getElementById("computer-choosen").innerHTML = `<i>${comp_choice}</i>`;

    console.log('input', input, 'comp-choice', comp_choice);

    switch(rules[comp_choice][input]) {
        case 'win':
            result.innerText = `Gamer 1`;
            gamer_result++;
            break;
        case 'lose':
            result.innerText = `Computer`;
            comp_result++;
            break;
        case 'draw':
            result.innerText = `Draw`;
            break;
        }
        document.getElementById('gamer_result').innerHTML = gamer_result;
        document.getElementById('comp_result').innerHTML = comp_result;

        if(gamer_result === 5) {
            swal({title: "Good Job!", text: "You won the match!"}).then(function(){ 
   location.reload();
   }
);  
        } else if(comp_result === 5) {
            swal({title: "Computer Won", text: "Better luck next time!"}).then(function(){ 
   location.reload();
   }
);
        }

}