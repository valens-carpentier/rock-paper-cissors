function getComputerChoice() {
    let computerChoice; // Declare the variable computer choice
    let randomNumber = Math.floor(Math.random() * 3); // Pick a number between 0 and 3 
    if (randomNumber === 0) {
        return computerChoice = "Rock"; // If the number is 0, the computer choice is rock
    } else if (randomNumber === 1) {
        return computerChoice = "Scissor"; // If the number is 1, the computer choice is scissor
    } else if (randomNumber === 2) {
        return computerChoice = "Paper"; // If the number is 2, the computer choice is paper
    }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = document.querySelectorAll("input");

const resultDiv = document.querySelector('div');
const paraHuman = document.createElement("p");
const paraComputer = document.createElement("p");
const paraResult = document.createElement("p");
const paraHumanScore = document.createElement("p");
const paraComputerScore = document.createElement("p");
const paraGameResult = document.createElement("p");

paraHuman.textContent = "You: ";
paraComputer.textContent = "Computer: ";
paraResult.textContent = "Round: ";
paraHumanScore.textContent = "Human Score: 0";
paraComputerScore.textContent = "Computer Score: 0";
paraGameResult.textContent = "And the winner: ";

resultDiv.appendChild(paraHuman);
resultDiv.appendChild(paraComputer);
resultDiv.appendChild(paraResult);
resultDiv.appendChild(paraHumanScore);
resultDiv.appendChild(paraComputerScore);
resultDiv.appendChild(paraGameResult);

function playGame() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (roundCount < 5) {
                paraHuman.textContent = "You: ";
                paraComputer.textContent = "Computer: ";
                paraResult.textContent = "Round: ";

                let humanChoice = button.value;
                const resultHuman = document.createTextNode(humanChoice);
                paraHuman.appendChild(resultHuman);

                let computerChoice = getComputerChoice();
                const resultComputer = document.createTextNode(computerChoice);
                paraComputer.appendChild(resultComputer);

                playRound(humanChoice, computerChoice);

                const roundResult = document.createTextNode(result);
                paraResult.appendChild(roundResult);

                paraHumanScore.textContent = `Human Score: ${humanScore}`;
                paraComputerScore.textContent = `Computer Score: ${computerScore}`;

                roundCount++;

                if (roundCount === 5) {
                    if (humanScore > computerScore) {
                        paraGameResult.textContent = "And the winner: You";
                    } else if (humanScore < computerScore) {
                        paraGameResult.textContent = "And the winner: The computer";
                    } else {
                        paraGameResult.textContent = "And the winner: No one, it's a tie";
                    }
                }
            }
        });
    });
}

playGame();

// Create the variable of user and computer scores
const tie = "Tie! No one wins";
const win = "You win!";
const lose = "You lose";
let result = "";

// Write the logic to determine a winner on one hand
function playRound(humanChoice, computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Rock") {
        result = tie;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        result = lose;
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        result = win;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        result = win;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        result = tie;
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        computerScore++;
        result = lose;
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore++;
        result = lose;
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        result = win;
    } else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        result = tie;
    }
}