const choices = ["rock", "paper", "scissors"];
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
rockBtn.id = "rock";
paperBtn.id = "paper";
scissorsBtn.id = "scissors";

// Function to get computer's choice
function getComputerChoice() {
    // Randomly generate a number
    const randomElement = Math.floor(Math.random() * choices.length);

    return choices[randomElement];
}

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
    const body = document.querySelector("body");
    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);

    // Add event to playRound once button is clicked
    const choiceBtns = document.querySelectorAll("button");
    const currentScore = document.createElement("div");
    const roundSummary = document.createElement("div");
    

    choiceBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const playerSelection = btn.id;
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);

            currentScore.textContent = `Player: ${playerScore}\nComputer: ${computerScore}`;
            body.appendChild(currentScore);
        });
    });

    function playRound(playerChoice, computerChoice) {
        // If round is draw
        if (playerChoice.toLowerCase() === computerChoice) {
            roundSummary.textContent = "Draw!";
            body.appendChild(roundSummary);
        }
        // If player beats computer
        else if (
            (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
            (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")
        ) {
            // Log win message
            roundSummary.textContent = `You win this round! ${ capitaliseString(playerChoice) } beats ${ capitaliseString(computerChoice)}!`;
            body.appendChild(roundSummary);

            // Increment player score
            playerScore++;
        }
        // If computer beats player
        else {
            // Log lose message
            roundSummary.textContent = `You lose this round! ${capitaliseString(computerChoice)} beats ${capitaliseString(playerChoice)}!`
            body.appendChild(roundSummary);
            
            // Increment computer score
            computerScore++;
        }
    }

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