/*
    ROCK PAPER SCISSORS GAME

    Rules:
    - Rock beats scissors 
    - Scissors beat paper
    - Paper beats rock
*/

// Get computer choice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return console.log("rock");
    } else if (computerChoice == 1) {
        return console.log("scissors");
    } else if (computerChoice == 2) {
        return console.log("paper");
    }
}

getComputerChoice();

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}

console.log(getHumanChoice());

// Keep track the score

// Play the game