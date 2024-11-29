// keep track of score and round
let humanScore = 0;
let computerScore = 0;
let round = 0;

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

// get the human choice using prompt; put the prompt to lower case; return it if it match
function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissors.").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input. Please enter rock, paper or scissors").toLowerCase();
    }
    return choice;
}

// console.log(getHumanChoice());

// get human and computer value. change human value to lower so always match
// check who win and print winner
// update score and print
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}. It's a draw`)
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`The computer chose ${computerChoice}, and you chose ${humanChoice}. You Won! Rock beats Scissors`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`The computer chose ${computerChoice}, and you chose ${humanChoice}. You won! Paper beats Rock`);
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`The computer chose ${computerChoice}, and you chose ${humanChoice}. You lost! Rock beats Scissors`);
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`The computer chose ${computerChoice}, and you chose ${humanChoice}. You lost! Scissors beats paper`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`The computer chose ${computerChoice}, and you chose ${humanChoice}. You lost! Paper beats rock`);
        computerScore++;
    }
    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
}

// playRound(humanSelection, computerSelection);

// do the game for 5 round. Get the human and computer value for each round and play the round
// give thhe final winner
function playGame() {
    while (round < 6) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }
    if (humanScore > computerScore) {
        console.log("You have won the game!")
    } else console.log("You have lost the game :(")
}

playGame();