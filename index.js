function computerPlay() {
    const handGestures = ["rock", "paper", "scissors"];
    const computerChoice = handGestures[Math.floor(Math.random() * handGestures.length)];
    return(computerChoice);
}



function playRound(playerSelection, computerSelection) {
    
    let playerPoints = 0;
    let computerPoints = 0;
     

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerPoints += 1;
        return(alert(`You Lose! Paper covers Rock. Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerPoints += 1;
        return(alert(`You Win! Rock smashes Scissors. Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoints += 1;
        return(alert(`You Win! Paper covers Rock. Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerPoints += 1;
        return(alert(`You Lose! Scissors cut Paper.Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints += 1;
        return(alert(`You Win! Scissors cut Paper.Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerPoints += 1;
        return(alert(`You Lose! Rock smashes Scissors.Player Points = ${playerPoints} Computer Points = ${computerPoints}`))
    }
    else return(alert("It's a Tie!"))

}


const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
