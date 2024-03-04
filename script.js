/*function playerSelection() {
    const allowedMoves = ["rock", "paper", "scissors"];
    const choice = window.prompt(`Choose: Rock ✊, Paper ✋, Scissors ✌️?`)?.toLowerCase();
    if (!allowedMoves.includes(choice)){
        return playerSelection();    
    }
    return choice;
}*/

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

 function checkWinner () {
    const compChoice = computerSelection();
    const playerChoice = playerSelection();
    console.log(`Il computer ha scelto ${compChoice}`);
    if (playerChoice === compChoice){
        console.log(`That's a tie!`);
        return "tie"
    }else if (playerChoice === 'rock' && compChoice === 'scissors' ||
              playerChoice === 'paper' && compChoice === 'rock' ||
              playerChoice === 'scissors' && compChoice === 'paper'){
                console.log(`You won! ${playerChoice} beats ${compChoice}`)
                return "player";
              }else {
                console.log(`You lost! ${compChoice} beats ${playerChoice}`);
                return "computer";
              }
 }

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

playGame();