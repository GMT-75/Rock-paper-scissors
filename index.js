// Gets computer's choice:
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Plays a round by taking in the computer and player's selection.
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw! both selections were " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return "You win! Rock beats Scissors.";
        } else {
            return "You lose! Paper beats Rock";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "You win! Scissors beats Paper";
        } else {
            return "You lose! Rock beats Scissors";
        }
    } else {
        return "Invalid Selection";
    }
}

function game() {
    let playerScore = 0;
    let computerScore =0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice for this round (Rock, Paper, Scissors)");
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);
        console.log("Round " + (i +1) + ": " + roundResult);

        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }
    
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game :(");
    } else {
        console.log("It's a draw!");
    }
}

game();
