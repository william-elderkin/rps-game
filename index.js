function computerPlay() {
    const handGestures = ["Rock", "Paper", "Scissors"];
    const computerChoice = handGestures[Math.floor(Math.random() * handGestures.length)];
    console.log(computerChoice);
}

computerPlay()
