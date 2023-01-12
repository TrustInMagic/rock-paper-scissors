function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = getRandomNumber(3);
  return choices[computerChoice];
}


// returns a random number from 0 to max
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}


function playGame(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();
  let result = null;

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
    results.textContent = `You tie! You both choose ${computerSelection}.`;
    humanPoints.textContent = `${playerPoints}`;
    calculatorPoints.textContent = `${computerPoints}`;
  } else if (result === 1) {
    results.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
    playerPoints++;
    humanPoints.textContent = `${playerPoints}`;
    calculatorPoints.textContent = `${computerPoints}`;
  } else {
    results.textContent = `You loose! ${computerSelection} beats ${playerSelection}.`;
    computerPoints++;
    humanPoints.textContent = `${playerPoints}`;
    calculatorPoints.textContent = `${computerPoints}`;
  }

  if (playerPoints >= 5 || computerPoints >= 5) {
    showdown(playerPoints, computerPoints);
  }

  console.log(playerPoints, computerPoints)
}


function showdown(playerPoints, computerPoints) {
  if (playerPoints === computerPoints) {
    finalResults.textContent = "You tied, you live to fight another day"
  } else if (playerPoints > computerPoints) {
    finalResults.textContent = "Congratulations, you won the championship!"
  } else {
    finalResults.textContent = "Unfortunately you loose, computer wins."
  }
}

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  finalResults.textContent = ""
}

let playerPoints = 0;
let computerPoints = 0;

let results = document.querySelector(".results");
let buttons = document.querySelectorAll("button");
let finalResults = document.querySelector(".final-results");
let humanPoints = document.querySelector(".player-points");
let calculatorPoints = document.querySelector(".computer-points")



for (let button of buttons) {
  button.addEventListener("click", (e) => playGame(e.target.textContent, getComputerChoice()))
}









