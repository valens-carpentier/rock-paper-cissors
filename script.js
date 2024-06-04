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

function getHumanChoice () {
    let humanChoice;
    let userInput = prompt("Rock? Paper? Scissor").toLowerCase(); // Define the variable asking to the user
    if (userInput === "rock") {
        return humanChoice = "Rock"
    } else if (userInput === "scissor") {
        return humanChoice = "Scissor"
    } else if (userInput === "paper") {
        return humanChoice = "Paper"
    } else {
        console.log("Invalid input, please try again."); // Log invalid input
        return getHumanChoice();
    }
}

// Create the variable of user and computer scores
let humanScore = 0;
let computerScore = 0;

// Write the logic to determine a winner on one hand
function playRound (humanChoice,computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Rock") {
        console.log("Tie! No one wins");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        console.log("You win! Rock beats Scissor");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Tie! No one wins");
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        computerScore++;
        console.log("You lose! Scissor beats Paper");
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissor");
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        console.log("You win! Scissor beats Paper");
    } else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        console.log("Tie! No one wins");
    }
}

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



