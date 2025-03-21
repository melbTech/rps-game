// console.log("Hello, Melvin");

// Function to get computer choice
let getComputerChoice = () => {
    let choices = "rock, paper, scissors";
    let ranNum = Math.floor(Math.random() * 3);

    if (ranNum === 0) {
        return choices.slice(0, 4);
    } else if (ranNum === 1) {
        return choices.slice(6, 11);
    } else {
        return choices.slice(13, 21);
    }
}

// Function to get the human choice
let getHumanChoice = () => {
    let choice = prompt("Pick rock, paper or scissors: ");
    return choice;
}


// Function to play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLocaleLowerCase();

    if (computerChoice === "rock" && humanChoice === "scissors" || 
        computerChoice === "paper" && humanChoice === "rock" || 
        computerChoice === "scissors" && humanChoice === "paper") {
            // if (computerChoice === "rock") {
            //     return "computer"
            // }
            // if (computerChoice === "Paper") {
            //     return "computer"
            // }
            // if (computerChoice === "scissors") {
            //     return "computer"
            // }
            return "computer";
        }
    else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper") {
            // if (humanChoice === "rock") {
            //     return "human"
            // }
            // if (humanChoice === "Paper") {
            //     return "human"
            // }
            // if (humanChoice === "scissors") {
            //     return "human"
            // }
            return "human";
        }
    else {
        return "tie"
    }

}

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();
// console.log(`Computer picked: ${computerSelection}`);
// console.log(`You picked: ${humanSelection}`);

// console.log(playRound(humanSelection, computerSelection));

// Function to play a full game
function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;


    for(let i = 1; i <= 5; i ++) {
    
        let play = playRound(getHumanChoice(), getComputerChoice()); 
        if (play === "computer") {
            computerScore += 1;
            console.log(`computer ${computerScore}`);
        } else if (play === "human") {
        humanScore += 1;
        console.log(`human ${humanScore}`);
        } else {
        console.log("Tie")
        }

    }

    if (computerScore > humanScore) {
        console.log(`You lose! Computer got ${computerScore} and you got ${humanScore}`)
    } else {
        console.log(`You Win! Computer got ${computerScore} and you got ${humanScore}`)
    }
}


playGame();


