/* HOW TO CLEAR A CONTAINER
const container = document.querySelector(".container");
console.log(container)

container.innerHTML = '';
*/
//const allowedChoices = ["rock", "paper", "scissors"];
let playerScore = document.querySelector("#playerScore");
let winnerSection = document.querySelector(".roundwinner");
const buttons = document.querySelectorAll(".choice");
let playerChoice;
let tempPlayerScore=0, tempComputerScore=0;

playerScore.textContent = `${tempPlayerScore}`;
computerScore.textContent = `${tempComputerScore}`;

buttons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.id;
    console.log("Player choice:", playerChoice);
    const computerChoice = computerSelection();
    console.log("Computer choice:", computerChoice);
    const result = checkRoundWinner(playerChoice, computerChoice);
    updateScore(result);
}));

const computerSelection = () => {
    const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
    }
 };

 function checkRoundWinner (playerChoice, compChoice) {
    if (playerChoice === compChoice){
        winnerSection.textContent = `That's a tie!`;
        console.log(`That's a tie!`);
        return "tie"
    }else if (playerChoice === 'rock' && compChoice === 'scissors' ||
              playerChoice === 'paper' && compChoice === 'rock' ||
              playerChoice === 'scissors' && compChoice === 'paper'){
                winnerSection.textContent = `You won! ${playerChoice} beats ${compChoice}`;
                console.log(`You won! ${playerChoice} beats ${compChoice}`)
                return "player";
              }else {
                winnerSection.textContent = `You lost! ${compChoice} beats ${playerChoice}`;
                console.log(`You lost! ${compChoice} beats ${playerChoice}`);
                return "computer";
              }
 }
 
 const updateScore = (result) => {
    switch (result) {
        case "player":
            tempPlayerScore++;
            playerScore.textContent = `${tempPlayerScore}`;
            break;
        case "computer":
            tempComputerScore++;
            computerScore.textContent = `${tempComputerScore}`;
            break;
    }
 };