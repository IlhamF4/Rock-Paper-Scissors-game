let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    let h = humanChoice;
    let c = computerChoice;
    
    if (h === c) {
        console.log("Draw!");
    } else if (h === "paper" && c === "rock" || 
        h === "rock" && c === "scissors" || 
        h === "scissors" && c === "paper"){
        console.log(`You win! ${h} beats ${c}`);
        humanScore++;    
    } else {
        console.log(`You lose! ${c} beats ${h}`);
        computerScore++;
    }
}

for (let i = 0; i <5; i++){
    let c = getComputerChoice()
    let h = getHumanChoice()
    playRound(h, c);
}

console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

