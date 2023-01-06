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
    return 0;
  } else if (result === 1) {
    return 1;
  } else {
    return 2;
  }
}


function game() {
  let results = []
  let playerWins = []
  let computerWins = []

  alert("Let's play five rounds!");
  
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    results.push(result)

    if (result === 0) {
      console.log(`You tie! You both choose ${computerSelection}.`);
    } else if (result === 1) {
      console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    } else {
      console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);
    }
  }

  for (let result of results) {
    switch (result){
      case 1:
        playerWins.push(result);
        break;
      case 2:
        computerWins.push(result);
        break;
    }
  }

  if (playerWins.length > computerWins.length) {
    console.log("You won! Congratulations!");
  } else if (playerWins.length < computerWins.length) {
    console.log("Unfortunately you lost.");
  } else {
    console.log("You tied. Play again!")
  }
}


game()