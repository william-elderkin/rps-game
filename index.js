function computerPlay() {
    const handGestures = ["rock", "paper", "scissors"];
    const computerChoice = handGestures[Math.floor(Math.random() * handGestures.length)];
    return(computerChoice);
}



function playRound(playerSelection, computerSelection) {
    
  

    if (playerSelection == "rock" && computerSelection == "paper") {
        return(alert("You Lose! Paper covers Rock."));
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return(alert("You Win! Rock smashes Scissors."));
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return(alert("You Win! Paper covers Rock."));
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return(alert("You Lose! Scissors cut Paper."));
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return(alert("You Win! Scissors cut Paper."));
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return(alert("You Lose! Rock smashes Scissors."));
    }
    else return(alert("It's a Tie!"))

}


const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
