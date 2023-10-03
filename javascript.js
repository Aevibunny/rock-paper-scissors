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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const alertBelow = document.querySelector('#alert');
const playerWinDisplay = document.querySelector('#playerWinDisplay')
const computerWinDisplay = document.querySelector('#computerWinDisplay')


const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
    if (computerSelection == "rock" && playerSelection == "paper") {
        alertBelow.textContent = "You win! Paper beats Rock";
        playerWinDisplay.textContent = `${playerWin}`;
        return ++playerWin;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        alertBelow.textContent = "You lose! Rock beats Scissors";
        computerWinDisplay.textContent = `${computerWin}`;
        return ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        alertBelow.textContent = "You lose! Paper beats Rock";
        computerWinDisplay.textContent = `${computerWin}`;
        return ++computerWin;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        alertBelow.textContent = "You win! Scissors beat Paper";
        playerWinDisplay.textContent = `${playerWin}`;
        return ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        alertBelow.textContent = "You win! Rock beats Scissors";
        playerWinDisplay.textContent = `${playerWin}`;
        return ++playerWin;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        alertBelow.textContent = "You lose! Scissors beat Paper";
        computerWinDisplay.textContent = `${computerWin}`;
        return ++computerWin;
    } else {
        alertBelow.textContent = 'Tie!';
    };
}

rock.addEventListener('click', function() {
    playRound('rock', );
});

paper.addEventListener('click', function() {
    playRound('paper', );
});

scissors.addEventListener('click', function() {
    playRound('scissors', );
});




/* Old play game loop
let playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerWin > computerWin) {
        alert('You won best out of 5!');
    } else if (computerWin > playerWin) {
        alert('Too bad, computer won best out of 5.');
    } else if (computerWin === playerWin) {
        alert('Tie game out of 5')
    }
}
*/