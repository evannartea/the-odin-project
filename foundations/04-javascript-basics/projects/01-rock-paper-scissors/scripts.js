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
    let targerScore = 5;

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
    const winner = document.createElement("h2");

    body.appendChild(roundSummary);
    body.appendChild(currentScore);
    body.appendChild(winner);

    choiceBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const playerSelection = btn.id;
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);

            currentScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

            checkWinner();
        });
    });

    function playRound(playerChoice, computerChoice) {
        // If round is draw
        if (playerChoice.toLowerCase() === computerChoice) {
            roundSummary.textContent = `Draw! You both chose ${capitaliseString(playerChoice)}!`;
        }
        // If player beats computer
        else if (
            (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
            (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")
        ) {
            // Log win message
            roundSummary.textContent = `You win this round! ${capitaliseString(playerChoice)} beats ${capitaliseString(computerChoice)}!`;

            // Increment player score
            playerScore++;
        }
        // If computer beats player
        else {
            // Log lose message
            roundSummary.textContent = `You lose this round! ${capitaliseString(computerChoice)} beats ${capitaliseString(playerChoice)}!`
            
            // Increment computer score
            computerScore++;
        }
    }

    // Function to check winner for game
    function checkWinner() {
        if (playerScore === targerScore) {
            winner.textContent = "Player wins the game!";
            body.removeChild(roundSummary);
            body.removeChild(rockBtn);
            body.removeChild(paperBtn);
            body.removeChild(scissorsBtn);
        }
        else if (computerScore === targerScore) {
            winner.textContent = "Computer wins the game!";
            body.removeChild(roundSummary);
            body.removeChild(rockBtn);
            body.removeChild(paperBtn);
            body.removeChild(scissorsBtn);
        }
    };
};

playGame();