function computerPlay() {
    const handGestures = ["rock", "paper", "scissors"];
    let computerChoice = handGestures[Math.floor(Math.random() * handGestures.length)];
    return(computerChoice);
}

let playerPoints = 0;
let computerPoints = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerPoints += 1;
        return(`You Lose! Paper covers Rock. Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerPoints += 1;
        return(`You Win! Rock smashes Scissors. Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoints += 1;
        return(`You Win! Paper covers Rock. Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerPoints += 1;
        return(`You Lose! Scissors cut Paper.Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints += 1;
        return(`You Win! Scissors cut Paper.Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerPoints += 1;
        return(`You Lose! Rock smashes Scissors.Player Points = ${playerPoints} Computer Points = ${computerPoints}`)
    }
    else return("It's a Tie!")
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function finalScore(playerPoints, computerPoints) {
   
    if (playerPoints > computerPoints) {
        console.log(`You beat the computer! ${playerPoints} to ${computerPoints}`);
    }
    if (playerPoints < computerPoints) {
        console.log(`The computer beat you! ${computerPoints} to ${playerPoints}`);
    }
    if (playerPoints == computerPoints) {
        console.log(`Final score is a tie! ${playerPoints} to ${computerPoints}`);
    }
}

game();
finalScore(playerPoints, computerPoints);

