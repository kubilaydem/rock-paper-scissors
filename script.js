const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return items[Math.floor(Math.random() * items.length)];
}

alert(getComputerChoice())