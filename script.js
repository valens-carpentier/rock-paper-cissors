function getComputerChoice () {
    let computerChoice; // Declare the variable computer choice
    let randomNumber = Math.floor(Math.random()*3);   // Pick a number between 0 and 3 
    if (randomNumber === 0) {
        return computerChoice = "Rock"; // If the numer is 0, the conputer choice is rock
    } else if (randomNumber === 1) {
        return computerChoice = "Scissor"; // If the number is 1, the computer choice is scissor
    } else if (randomNumber === 2) {
        return computerChoice = "Paper"; // If the number is 2, the computer choice is paper
    }
}

const buttons = document.querySelectorAll("input");

const resultDiv = document.querySelector('div');
const paraHuman = document.createElement("p");
const paraComputer = document.createElement("p");
const paraResult = document.createElement("p");

paraHuman.textContent = "You: ";
paraComputer.textContent = "Compute: ";
paraResult.textContent = "Round: ";

resultDiv.appendChild(paraHuman);
resultDiv.appendChild(paraComputer);
resultDiv.appendChild(paraResult);

function playGame () {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
        let humanChoice = button.value; 
        const resultHuman = document.createTextNode(humanChoice);
        paraHuman.appendChild(resultHuman);
        let computerChoice = getComputerChoice();
        const resultComputer = document.createTextNode(computerChoice);
        paraComputer.appendChild(resultComputer);
        playRound(humanChoice,computerChoice);
        const roundResult = document.createTextNode(result);
        paraResult.appendChild(roundResult);
        });
    });
}

playGame();

// Create the variable of user and computer scores
let humanScore = 0;
let computerScore = 0;
const tie = "Tie! No one wins";
const win = "You win!";
const lose = "You loss";
let result = "";

// Write the logic to determine a winner on one hand
function playRound (humanChoice,computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Rock") {
        result = tie;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        result = lose;
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        result =  win;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        result =  win;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        result =  win;
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        computerScore++;
        result =  lose;
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore++;
        result =  lose;
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        result =  win;
    } else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        result = tie ;
    }
}


/*

function playGame () {

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound (humanChoice,computerChoice);
        console.log("Human:",humanScore,"Computer:",computerScore)

    }
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game!")
    } else if (humanScore === computerScore) {
        console.log("Tie Game")
    }
}

playGame();

*/

