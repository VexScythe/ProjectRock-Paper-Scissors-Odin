/*function playerSelection() {
    const allowedMoves = ["rock", "paper", "scissors"];
    const choice = window.prompt(`Choose: Rock ✊, Paper ✋, Scissors ✌️?`)?.toLowerCase();
    if (!allowedMoves.includes(choice)){
        return playerSelection();    
    }
    return choice;
}*/
/* HOW TO CLEAR A CONTAINER
const container = document.querySelector(".container");
console.log(container)

container.innerHTML = '';
*/
//const allowedChoices = ["rock", "paper", "scissors"];
let winnerSection = document.querySelector(".roundwinner");
const buttons = document.querySelectorAll(".choice");
let playerChoice;

buttons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.id;
    console.log("Player choice:", playerChoice);
    const computerChoice = computerSelection();
    console.log("Computer choice:", computerChoice);
    checkWinner(playerChoice, computerChoice);
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

 function playGame() {

 } 

 function checkWinner (playerChoice, compChoice) {
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
/*
function playGame () {
 let playerScore = 0,
     computerScore = 0,
     winner;
     for (let i = 1; i < 6; i++){
        console.log(`________________`);
        console.log(`Round: ${i}`);
        winner = checkWinner();
        if (winner === "player"){
            playerScore++;
        } else if (winner === "computer"){
            computerScore++;
        }
     }
     if (playerScore > computerScore){
        console.log(`________________`);
        console.log(`You won the RPS game! ${playerScore} to ${computerScore}`);
     }else if (playerScore < computerScore){
        console.log(`________________`);
        console.log(`You lost the RPS game! ${computerScore} to ${playerScore}`);
     } else {
        console.log(`________________`);
        console.log(`Game ended in a tie! ${playerScore} to ${computerScore}`);
       }
}

playGame(); */