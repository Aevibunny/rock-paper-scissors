let playerWin;
let computerWin;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    if (computerSelection == "rock" && playerSelection == "paper") {
        alert("You win! Paper beats Rock");
        return ++playerWin;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        alert("You lose! Rock beats Scissors");
        return ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        alert("You lose! Paper beats Rock");
        return ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        alert("You win! Scissors beat Paper");
        return ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        alert("You win! Rock beats Scissors");
        return ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        alert("You lose! Scissors beat Paper");
        return ++computerWin;
    } else {
        alert('Tie!')
    };
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerWin > computerWin) {
        alert('You won best out of 5!');
    } else if (computerWin > playerWin) {
        alert('Too bad, computer won best out of 5.');
    } else if (computerWin === playerWin) {
        alert('Tie game out of 5')
    }
}