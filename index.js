// Gets computer's choice:
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Gets computer's choice. Alternative approach.
// function getComputerChoice () {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

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

const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));