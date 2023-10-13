let computerScore = 0
let playerScore = 0
let currentRound = 1

function getComputerChoice(){
    const items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function round(playerSelection, computerSelection) {
    if (playerSelection === "scissors" && computerSelection === "rock" || 
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors") {
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return (computerScore = ++computerScore, 
                    currentRound = ++currentRound);
      } else if (playerSelection === "paper" && computerSelection === "rock" ||
                 playerSelection === "scissors" && computerSelection ==="paper" ||
                 playerSelection === "rock" && computerSelection === "scissors") {
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                    return (playerScore = ++playerScore,
                            currentRound = ++currentRound);
                 } else {
                        alert("Tie!");
                        return currentRound = ++currentRound;
                 }
}

function game() {
    const playerSelection = prompt("Round:  " + currentRound + " | Choose your item |" + " Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice()
    round(playerSelection, computerSelection);
    scoreCheck()
    }

function scoreCheck() {
    alert("Player = " + playerScore + " & Computer = " + computerScore);
    if (currentRound === 6 & computerScore > playerScore) {
            alert("Computer wins this game.")
        } else if (currentRound === 6 & computerScore < playerScore) {
            alert("You win this game.")
        } else if (currentRound === 6 & computerScore === playerScore) {
            alert("It's draw, try again.")
        }
}

game()
game()
game()
game()
game()