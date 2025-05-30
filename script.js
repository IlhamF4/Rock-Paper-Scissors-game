function getComputerChoice() {
    let choice = "";
    const val = Math.floor(Math.random() * 3);
    if (val === 0) {
        choice = "rock";
    } else if (val === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, scissor");
    return choice.toLowerCase();
}

console.log(getComputerChoice())
console.log(getHumanChoice())
console.log()

