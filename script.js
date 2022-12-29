function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice = '';
    if (randomNum == 0)
        choice = 'Rock';
    else if (randomNum == 1)
        choice = 'Paper';
    else
        choice = 'Scissors';
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
    
    let resultStr = `Draw! both chose ${playerSelection}`;

    if (playerSelection != computerSelection) {
        if (playerSelection == 'Rock' && computerSelection == 'Scissors'
            || playerSelection == 'Scissors' && computerSelection == 'Paper'
            || playerSelection == 'Paper' && computerSelection == 'Rock') {
            resultStr = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            resultStr = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    
    return resultStr;    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = prompt("Please enter your choice", "Rock");
        const result = playRound(userChoice, getComputerChoice());
        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++;
        }
        console.log(result);
    }

    if (playerScore == computerScore)
        console.log("It's a draw");
    else if (playerScore > computerScore)
        console.log("You win");
    else
        console.log("You lose");
    console.log("Final score: " + playerScore + "-" + computerScore);
}