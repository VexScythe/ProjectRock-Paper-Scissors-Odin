/* HOW TO CLEAR A CONTAINER
const container = document.querySelector(".container");
console.log(container)

container.innerHTML = '';
*/
//const allowedChoices = ["rock", "paper", "scissors"];

const container = document.querySelector(".container");
let winnerSection = document.querySelector(".roundwinner");
const buttons = document.querySelectorAll(".choice");
let playerChoice = 'none', compChoice = 'none';
let tempPlayerScore=0, tempComputerScore=0;

playerSelection.textContent = `${playerChoice}`;
compSelection.textContent = `${compChoice}`;
playerScore.textContent = `${tempPlayerScore}`;
computerScore.textContent = `${tempComputerScore}`;

buttons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.id;
    playerSelection.textContent = `${playerChoice}`;
    const computerChoice = computerSelection();
    compSelection.textContent = `${computerChoice}`;
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
        return "tie"
    }else if (playerChoice === 'rock' && compChoice === 'scissors' ||
              playerChoice === 'paper' && compChoice === 'rock' ||
              playerChoice === 'scissors' && compChoice === 'paper'){
                winnerSection.textContent = `You won! ${playerChoice} beats ${compChoice}`;
                return "player";
              }else {
                winnerSection.textContent = `You lost! ${compChoice} beats ${playerChoice}`;
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
        
        if (tempPlayerScore === 5 || tempComputerScore === 5){
            container.innerHTML = '';
            const winner = tempPlayerScore > tempComputerScore ? "Player" : "Computer";
            const loser = tempPlayerScore > tempComputerScore ? "Computer" : "Player";
            const winnerScore = Math.max(tempPlayerScore, tempComputerScore);
            const looserScore = Math.min(tempPlayerScore, tempComputerScore);
            container.innerHTML = `<p>${winner} wins ${winnerScore} to ${looserScore}!</p><div class="buttons"><button class="choice" id="playagain">Play Again</button></div>`;
            const playAgain = document.querySelector("#playagain");
            playAgain.addEventListener("click", () => {
                location.reload();
            });
        }
 };