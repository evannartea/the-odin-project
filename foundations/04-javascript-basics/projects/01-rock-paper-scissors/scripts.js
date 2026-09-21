const choices = ["rock", "paper", "scissors"];
const rockBtn = document.createElement("button");
rockBtn.id = "rock";
const paperBtn = document.createElement("button");
paperBtn.id = "paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.id = "scissors";
const body = document.querySelector("body");

// Function to get computer's choice
function getComputerChoice() {
    // Randomly generate a number
    const randomElement = Math.floor(Math.random() * choices.length);

    return choices[randomElement];
}

// // Function to get player's choice
// function getPlayerChoice() {
//     // Prompt user input for choice
//     return prompt("Choose Rock, Paper, or Scissors: ");
// }

// Function to capitalise strings
function capitaliseString(str) {
    const firstLetter = str[0].toUpperCase();
    let otherLetters = "";

    for (let i = 1; i < str.length; i++) {
        otherLetters += str[i].toLowerCase();
    }
    return `${firstLetter}${otherLetters}`;
}

function playGame() {
    // Declare score variables
    let playerScore = 0;
    let computerScore = 0;

    // Create buttons for each selection
    rockBtn.textContent = `${capitaliseString(choices[0])}`;
    paperBtn.textContent = `${capitaliseString(choices[1])}`;
    scissorsBtn.textContent = `${capitaliseString(choices[2])}`;

    // Append to DOM
    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);

    const choiceBtns = document.querySelectorAll("button");

    choiceBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            console.log(btn.id);
        });
    });

    function playRound(playerChoice, computerChoice) {
        // If round is draw
        if (playerChoice.toLowerCase() === computerChoice) {
            console.log("Draw!");
        }
        // If player beats computer
        else if (
            (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
            (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")
        ) {
            // Log win message
            console.log(`You win this round! ${capitaliseString(playerChoice)} beats ${capitaliseString(computerChoice)}!`);
            // Increment player score
            playerScore++;
        }
        // If computer beats player
        else {
            // Log lose message
            console.log(`You lose this round! ${capitaliseString(computerChoice)} beats ${capitaliseString(playerChoice)}!`);
            // Increment computer score
            computerScore++;
        }
    }

    // // Play 5 rounds
    // for (i = 0; i < 5; i++) {
    //     const playerSelection = getplayerChoice();
    //     const computerSelection = getComputerChoice();

    //     playRound(playerSelection, computerSelection);

    //     console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
    // }

    // Declare winner
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("It's a draw!");
    };
};

playGame();