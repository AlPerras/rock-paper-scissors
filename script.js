let humanScore = 0;
let computerScore = 0;
let game = 0;

function getHumanChoice() {
    return window.prompt("Choose between rock, paper or scissors.")
}

function getComputerChoice() {
    const x = Math.random();
    if (x === 1) {
        return "rock";
    } else if (x === 0) {
        return "paper";
    } else return "scissors";
}

const humanSelector = getHumanChoice().toLowerCase();
const computerSelector = getComputerChoice().toLowerCase();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("The round is tight");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;        console.log("You won the game!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You won this round!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You won this round!");
    } else {
        computerScore++;
        console.log("You lost this round");
    }
}

function playGame() {
    if (i = 0, i <= 5, i++) {
        getHumanChoice();
        getComputerChoice();
        const humanSelector = getHumanChoice().toLowerCase();
        const computerSelector = getComputerChoice().toLowerCase();
        playRound(humanSelector, computerSelector);
    } else {
        if (humanScore > computerScore) {
            console.log("Congradulation you won!");
        } else if (computerScore > humanScore) {
            console.log("You lost the game :(");
        } else console.log("The Game is tight.");
    }
    
}
playGame();