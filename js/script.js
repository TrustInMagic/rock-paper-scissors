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
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
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
    body.removeChild(master);
    body.appendChild(gameEnd);
    gameEnd.appendChild(finalResult);
    gameEnd.appendChild(resetButton);
  }
}


function showdown(playerPoints, computerPoints) {
  if (playerPoints === computerPoints) {
    finalResult.textContent = "You tied, you live to fight another day"
  } else if (playerPoints > computerPoints) {
    finalResult.textContent = "Congratulations, you saved the world!"
  } else {
    finalResult.textContent = "Unfortunately you loose, computer wins."
  }
}

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  humanPoints.textContent = "0";
  calculatorPoints.textContent = "0";
  body.removeChild(gameEnd);
  body.appendChild(master);
  //removes "button-press" class to the <img> element inside the <button> (used to remove the animation)
  buttons.forEach((button) => button.childNodes.forEach((node) => node.classList.remove("button-press")));
}


let playerPoints = 0;
let computerPoints = 0;

let results = document.querySelector(".results");
let buttons = document.querySelectorAll(".middle button");
let humanPoints = document.querySelector(".player-points");
let calculatorPoints = document.querySelector(".computer-points");
let body = document.querySelector("body");
let master = document.querySelector(".master");
let gameEnd = document.createElement("div");
let finalResult = document.createElement("div");
let resetButton = document.createElement("button");

gameEnd.setAttribute("class", "game-end");
finalResult.setAttribute("class", "final-result");
resetButton.setAttribute("class", "reset")
resetButton.textContent = "Play Again";


for (let button of buttons) {
  button.addEventListener("click", function(e) {
    playGame(e.target.className, getComputerChoice());
    // adds "button-press" class to the element being clicked (used for the click animation)
    e.target.classList.add("button-press");
  });
  button.addEventListener("transitionend", function(e){
    // removes "button-press" class after the transition ended
    e.target.classList.remove("button-press");
  });
}

resetButton.addEventListener("click", () => reset());







