
// Function to get computer choice
let getComputerChoice = () => {
    let ranNum = Math.floor(Math.random() * 3);

    switch(ranNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

// Function to get the human choice
let getHumanChoice = () => {
    let choice = prompt("Pick rock, paper or scissors: ").toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert("Invalid input");
        console.log("Invalid input");
    }
}


// Function to play a round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert(`It's a tie! you got ${humanChoice} & computer got ${computerChoice}`);
    } else if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            alert(`Computer wins, rock beats scissors!`);
            return "computer";
        } else if (humanChoice === "paper") {
            alert(`Human wins, paper beats rock!`);
            return "human";
        }
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            alert(`Computer wins, paper beats rock!`) ;
            return "computer";
        } else if (humanChoice == 'scissors') {
            alert(`Human wins, scissors beats paper!`);
            return "human";
        }
    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            alert(`Computer wins, scissors beats paper!`);
            return "computer";
        } else if (humanChoice === 'rock') {
            alert(`Human wins, rock beats scissors!`);
            return "human";
        }
    }

}

// Function to play a full game
function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;


    for(let i = 1; i <= 5; i ++) {
    
        let play = playRound(getHumanChoice(), getComputerChoice()); 
        if (play === "computer") {
            computerScore += 1;
            console.log(`Computer = ${computerScore}`);
        } else if (play === "human") {
            humanScore += 1;
            console.log(`You =  ${humanScore}`);
        } else {
            console.log("It's a tie")
        }

    }

    if (computerScore > humanScore) {
        alert(`FINAL: You lose! Computer got ${computerScore} and you got ${humanScore}`)
    } else if (humanScore > computerScore) {
        alert(`FINAL: You Win! Computer got ${computerScore} and you got ${humanScore}`)
    } else{
        alert(`FINAL: It's a tie! Computer got ${computerScore} and you got ${humanScore}`)
    }
}


playGame();


