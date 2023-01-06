function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = getRandomNumber(3)
  return choices[computerChoice]
}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}


function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();
  let result = null

  if (playerSelectionLower === computerSelection){
    result = 0;
  } else if (playerSelectionLower === "rock") {
    switch (computerSelection) {
      case "scissors":
        result = 1;
        break;
      case "paper":
        result = 2;
        break;
    }
  } else if (playerSelectionLower === "paper") {
    switch (computerSelection) {
      case "rock":
        result = 1;
        break;
      case "scissors":
        result = 2;
        break;
    }
  } else {
    switch (computerSelection) {
      case "rock":
        result = 2;
        break;
      case "paper":
        result = 1;
        break;
    }
  }

  if (result === 0) {
    return `You tie! You both choose ${computerSelection}.`;
  } else if (result === 1) {
    return `You won! ${playerSelectionLower} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} bets ${playerSelectionLower}.`;
  }
}


