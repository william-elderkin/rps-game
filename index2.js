function computerPlay() {
    const handGestures = ["rock", "paper", "scissors"];
    let computerChoice = handGestures[Math.floor(Math.random() * handGestures.length)];
    return(computerChoice);
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = computerPlay();

    switch (playerSelection, computerSelection) {
    case (playerSelection == "rock" && computerSelection == "paper"):
    case (playerSelection == "paper" && computerSelection == "scissors"):
    case (playerSelection == "scissors" && computerSelection == "rock"):
        computerPoints += 1;
        return(`You Lose! ${computerSelection} beats ${playerSelection}. Player Points = ${playerPoints} Computer Points = ${computerPoints}`);
    break;
    case (playerSelection == "rock" && computerSelection == "scissors"):
    case (playerSelection == "paper" && computerSelection == "rock"):
    case (playerSelection == "scissors" && computerSelection == "paper"):
        playerPoints += 1;
        return(`You Win! ${playerSelection} beats ${computerSelection}. Player Points = ${playerPoints} Computer Points = ${computerPoints}`);
    break;
    default:
        return("It's a Tie!");
    break;
}


        console.log(playerSelection, computerSelection));
    }
}

function finalScore(playerPoints, computerPoints) {
   
    if (playerPoints > computerPoints) {
        console.log(`You beat the computer! ${playerPoints} to ${computerPoints}`);
    }
    if (playerPoints < computerPoints) {
        console.log(`The computer beat you! ${computerPoints} to ${playerPoints}`);
    }
    else (playerPoints == computerPoints) {
        console.log(`Final score is a tie! ${playerPoints} to ${computerPoints}`);
    }
}

game();
finalScore(playerPoints, computerPoints);

