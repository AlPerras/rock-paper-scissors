// keep track of score
let humanScore = 0;
let computerScore = 0;

// get a random value x [0, 1], and return rock, paper or scissors base on the value
function getComputerChoice() {
    let x = Math.random();
    // console.log(x);
    if (x < 0.33) {
        return "rock";
    } else if (x < 0.66) {
        return "paper";
    } else return "scissors"
}

// console.log(getComputerChoice());

// get the human choice using prompt and return it
function getHumanChoice() {
    const choice = window.prompt("Choose between rock, paper or scissors.");
    return choice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // console.log(humanChoice);
    if (humanChoice == computerChoice) {
        console.log("It's thigh")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Won! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You won! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You won! Paper beats Rock");
        humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lost! Rock beats Scissors");
        computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lost! Scissors beats paper");
        computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lost! Paper beats rock");
        computerScore++;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
