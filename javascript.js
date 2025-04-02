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

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "scissors";
    } else if (computerChoice == 2) {
        return "paper";
    }
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}


let result = ""; // Store the result of the game (Win / Lose)

// Play the game
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

    return result;
}

// Store choices
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(playRound(humanSelection, computerSelection));

// Print the score
console.log(`Score:
    Computer = ${computerScore}
    Human = ${humanScore}`);