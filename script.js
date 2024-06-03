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
    let userInput = prompt("Rock? Paper? Scissor"); // Define the variable asking to the user
    if (userInput === "Rock") {
        return humanChoice = "Rock"
    } else if (userInput === "Scissor") {
        return humanChoice = "Scissor"
    } else if (userInput === "Paper") {
        return humanChoice === "Paper"
    } else {
        return getHumanChoice();
    }
}

// Create the variable of user and computer scores
let humanScore = 0;
let computerScore = 0;

// Write the logic to determine a winner on one hand
function playRound (getHumanChoice,getHumanChoice) {
    if (getComputerChoice === "Rock" & getHumanChoice === "Rock") { // Both players choose Rock: (R, R), no point added
        return "Tie! No ones wins";
    } else if (getHumanChoice === "Rock" & getComputerChoice === "Paper") { // User chooses Rock, Computer chooses Paper: (R, P) - Computer wins
        computerScore = computerScore + 1;
        return "You lose! Paper beats Rock";
    } else if (getHumanChoice === "Rock" & getComputerChoice === "Scissor") {  // User chooses Rock, Computer chooses Scissors: (R, S) - Users wins
        humanScore = humanScore + 1;
        return "You win! Rock beats Scissor";
    } else if (getHumanChoice === "Paper" & getComputerChoice === "Rock") { // User chooses Paper, Computer chooses Rock: (P, R) - User wins
        humanScore = humanScore + 1;
        return "You win! Paper beats Rock";
    } else if (getHumanChoice === "Paper" & getComputerChoice === "Paper") { // Both players choose Paper: (P, P) - , no point added
        return "Tie! No ones wins";

    }
}


    
    // User chooses Paper, Computer chooses Scissors: (P, S) - Computers wins
    // User chooses Scissors, Computer chooses Rock: (S, R) - Computers wins
    // User chooses Scissors, Computer chooses Paper: (S, P) - User wins
    // Both players choose Scissors: (S, S) - , no point added

// Write the logic to determine who is the winner after 5 round
    // The party must be five rounds
    // Each time, add the point wins to the winners to the variable scores
    // When done 5 rounds, display the result
    // If computer is above user, computer wins
    // If computer is behind user, cuser wons
    // If computer is equal to user, tie game



