let playerWin = 0;
let computerWin = 0;

const getComputerChoice= () => {
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

const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const alertBelow = document.querySelector('#alert');
const playerWinDisplay = document.querySelector('#playerWinDisplay')
const computerWinDisplay = document.querySelector('#computerWinDisplay')
const winAlert = document.querySelector('#winAlert');
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play Again';


const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
     if (computerSelection == "rock" && playerSelection == "paper") {
        alertBelow.textContent = "You win! Paper beats Rock";
        ++playerWin;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        alertBelow.textContent = "You lose! Rock beats Scissors";
        ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        alertBelow.textContent = "You lose! Paper beats Rock";
        ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        alertBelow.textContent = "You win! Scissors beat Paper";
        ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        alertBelow.textContent = "You win! Rock beats Scissors";
        ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        alertBelow.textContent = "You lose! Scissors beat Paper";
        ++computerWin;
    } else {
        alertBelow.textContent = 'Tie!';
    };
};

playAgainButton.addEventListener ('click', () => {
    location.reload();
})

rock.addEventListener('click', function() {
    playRound('rock', );
    playerWinDisplay.textContent = `${playerWin}`;
    computerWinDisplay.textContent = `${computerWin}`;
        if (playerWin == 5) {
        winAlert.textContent = 'You got 5 points, you win!'
        choices.replaceChildren(playAgainButton);
    } else if (computerWin == 5) {
        winAlert.textContent = 'Computer got 5 points, you lose!'
        choices.replaceChildren(playAgainButton);
    }
});

paper.addEventListener('click', function() {
    playRound('paper', );
    playerWinDisplay.textContent = `${playerWin}`;
    computerWinDisplay.textContent = `${computerWin}`;
        if (playerWin == 5) {
        winAlert.textContent = 'You got 5 points, you win!'
        choices.replaceChildren(playAgainButton);
    } else if (computerWin == 5) {
        winAlert.textContent = 'Computer got 5 points, you lose!'
        choices.replaceChildren(playAgainButton);
    }
});

scissors.addEventListener('click', function() {
    playRound('scissors', );
    playerWinDisplay.textContent = `${playerWin}`;
    computerWinDisplay.textContent = `${computerWin}`;
        if (playerWin == 5) {
        winAlert.textContent = 'You got 5 points, you win!'
        choices.replaceChildren(playAgainButton);
    } else if (computerWin == 5) {
        winAlert.textContent = 'Computer got 5 points, you lose!'
        choices.replaceChildren(playAgainButton);
    }
});
