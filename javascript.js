/*
    ROCK PAPER SCISSORS GAME

    Rules:
    - Rock beats scissors 
    - Scissors beat paper
    - Paper beats rock
*/

// Scores
let humanScore = 0;
let computerScore = 0;


// Get computer choice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default: 
            return "Invalid choice";
    }
}

// Get human choice
function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}


let result = ""; // Store the result of the game (Win / Lose)

// Play by round
function playRound(humanChoice, computerChoice) {

    // Print computer and human selected choice
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    if (humanChoice == computerChoice) {
        result = "DRAW!"; // Both pick the same choice
    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    computerScore++;
                    result = "LOSE! Paper beats rock";
                } else {
                    humanScore++;
                    result = "WIN! Rock beats scissors";
                }
                break;

            case "paper":
                if (computerChoice == "scissors") {
                    computerScore++;
                    result = "LOSE! Scissors beats paper";
                } else {
                    humanScore++;
                    result = "WIN! Paper beats rock";
                }
                break;

            case "scissors":
                if (computerChoice == "rock") {
                    computerScore++;
                    result = "LOSE! Rock beats scissors";
                } else {
                    humanScore++;
                    result = "WIN! Scissors beats paper";
                }
                break;
        }
    }

    return console.log(result);
}


// Play the game 5 times
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();

// Print the Final score
console.log(`Score:
    Computer = ${computerScore}
    Human = ${humanScore}`);