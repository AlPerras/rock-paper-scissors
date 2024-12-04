// keep track of score and round
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

// get human and computer value. change human value to lower so always match
// check who win and print winner
// update score and print
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result;
    
    if (humanChoice === computerChoice) {
        result = `The computer chose ${computerChoice} and you chose ${humanChoice}. It's a draw`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") 
    ) {
        result = `The computer chose ${computerChoice}, and you chose ${humanChoice}. You Won! Rock beats Scissors`;
        humanScore++;
    } else {
        result = `The computer chose ${computerChoice}, and you chose ${humanChoice}. You lost! Rock beats Scissors`;
        computerScore++;
    }

    updateResults(result);
    checkWinner();
}

function updateResults(message) {
    const resultsDiv = document.querySelector("#results");

    // Find or create the elements for result message and scores
    let messagePara = document.querySelector("#message");
    if (!messagePara) {
        messagePara = document.createElement("p");
        messagePara.id = "message";
        resultsDiv.appendChild(messagePara);
    }
    messagePara.textContent = message;

    let humanScorePara = document.querySelector("#humanScore");
    if (!humanScorePara) {
        humanScorePara = document.createElement("p");
        humanScorePara.id = "humanScore";
        resultsDiv.appendChild(humanScorePara);
    }
    humanScorePara.textContent = `Human Score: ${humanScore}`;

    let computerScorePara = document.querySelector("#computerScore");
    if (!computerScorePara) {
        computerScorePara = document.createElement("p");
        computerScorePara.id = "computerScore";
        resultsDiv.appendChild(computerScorePara);
    }
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

function checkWinner() {
    const resultsDiv = document.querySelector("#results");
    let winnerPara = document.querySelector("#winner");

    if (humanScore + computerScore === 5) {
        if (!winnerPara) {
            winnerPara = document.createElement("p");
            winnerPara.id = "winner";
            resultsDiv.appendChild(winnerPara);
        }
        if (humanScore > computerScore) {
            winnerPara.textContent = "Congratulation, you won!";
        } else {
            winnerPara.textContent = "Sorry, you lost :(";
        }
        disableBtn();
    }
}

function disableBtn() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));