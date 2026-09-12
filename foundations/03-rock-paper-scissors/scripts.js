const choices = ["rock", "paper", "scissors"];
// Declare score variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    // Randomly generate a number
    const randomElement = Math.floor(Math.random() * choices.length);

    return choices[randomElement];
}

// Function to get human's choice
function getHumanChoice() {
    // Prompt user input for choice
    return prompt("Rock, paper, or scissors: ");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("Draw!");
    }
    else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice}!`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice.toLowerCase()}!`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

console.log(humanScore);
console.log(computerScore);