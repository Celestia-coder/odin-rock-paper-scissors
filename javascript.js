/*
    ROCK PAPER SCISSORS GAME

    Rules:
    - Rock beats scissors 
    - Scissors beat paper
    - Paper beats rock
*/

// Variables
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");

// Create variables for result div
const resultDiv = document.createElement("div");
const resultTextP = document.createElement("p");
const scoreP = document.createElement("p");
const winnerP = document.createElement("p");

// Add elements in result div
resultDiv.appendChild(resultTextP);
resultDiv.appendChild(scoreP);
resultDiv.appendChild(winnerP);
container.appendChild(resultDiv);


// Tracks the score
let humanScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
	const computerChoice = Math.floor(Math.random() * 3);

	switch (computerChoice) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
        default: return "Invalid choice";
	}
}

// Get human choice and play the game
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const humanChoice = e.target.value.toLowerCase();
		const computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	});
});

// Play the game
function playRound(humanChoice, computerChoice) {
	let resultText = "";

	if (humanChoice === computerChoice) {
		resultText = `DRAW! You both chose ${humanChoice}`;
        console.log(resultText);
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		resultText = `You WIN! ${humanChoice} beats ${computerChoice}`;
        console.log(resultText);
	} else {
		computerScore++;
		resultText = `You LOSE! ${computerChoice} beats ${humanChoice}`;
        console.log(resultText);
	}

	console.log("Human:", humanChoice);
	console.log("Computer:", computerChoice);

	displayResult(resultText);
	checkWinner();
}

// Update result and score
function displayResult(resultText) {
	resultTextP.textContent = resultText;
	scoreP.textContent = `Score: Human [${humanScore}] - Computer [${computerScore}]`;
}

// Check if someone won
function checkWinner() {
	if (humanScore === 5 || computerScore === 5) {
		if (humanScore === 5) {
			winnerP.textContent = "HUMAN WINS!";
		} else {
			winnerP.textContent = "COMPUTER WINS!";
		}

		// Disable buttons after game ends
		buttons.forEach((button) => (button.disabled = true));
	}
}

