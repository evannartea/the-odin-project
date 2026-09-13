const choices = ["rock", "paper", "scissors"];

// Function to get computer's choice
function getComputerChoice() {
    // Randomly generate a number
    const randomElement = Math.floor(Math.random() * choices.length);

    return choices[randomElement];
}

// Function to get human's choice
function getHumanChoice() {
    // Prompt user input for choice
    return prompt("Choose Rock, Paper, or Scissors: ");
}

// Function to capitalise strings
function capitaliseString(str) {
    const firstLetter = str[0].toUpperCase()
    let otherLetters = ""

    for (let i = 1; i < str.length; i++) {
        otherLetters += str[i].toLowerCase()
    }

    return `${firstLetter}${otherLetters}`
}

function playGame() {
    // Declare score variables
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // If round is draw
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log("Draw!");
        }
        // If human beats computer
        else if (
            (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
        ) {
            // Log win message
            console.log(`You win this round! ${capitaliseString(humanChoice)} beats ${capitaliseString(computerChoice)}!`);
            // Increment human score
            humanScore++;
        }
        // If computer beats human
        else {
            // Log lose message
            console.log(`You lose this round! ${capitaliseString(computerChoice)} beats ${capitaliseString(humanChoice)}!`);
            // Increment computer score
            computerScore++;
        }
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Player wins the game!")
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    }
    else {
        console.log("It's a draw!")
    }
}

playGame()