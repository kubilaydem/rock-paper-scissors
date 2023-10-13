// get user choice with prompt box
// save user input to variable
// randomize computer choice
// save computer choice to variable
// compare computer and user choice
// create computer win conditions (if)
// create player win condition (else if)
// create tie condition (else)
// return lose / win / tie message with template literal
// repeat round 5 times
// display winner

const items = ["rock", "paper", "scissor"];

function getComputerChoice(){
    return items[Math.floor(Math.random() * items.length)];
}

/* 
Possible conditions
-Player- -Computer-  -Result-
Rock      Rock       Tie            
Paper     Rock       Player
Scissor   Rock       Computer
Rock      Paper      Computer
Paper     Paper      Tie
Scissor   Paper      Player
Rock      Scissor    Player
Paper     Scissor    Computer
Scissor   Scissor    Tie
*/

function round(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "rock" || 
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissor") {
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
      } else if (playerSelection === "paper" && computerSelection === "rock" ||
                 playerSelection === "scissor" && computerSelection ==="paper" ||
                 playerSelection === "rock" && computerSelection === "scissor") {
                    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
                 } else {
                        alert("Tie!");
                        return "Tie!";
                 }
}

let playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
console.log("player = " + playerSelection)
const computerSelection = getComputerChoice()
console.log("computer = " + computerSelection)
round(playerSelection, computerSelection);