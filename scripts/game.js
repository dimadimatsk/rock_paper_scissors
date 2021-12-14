// const weapons
const gameValues = ["rock", "paper", "scissors"];

// game scores
let playerScore = 0;
let compScore = 0;
let roundWinner = "";

// comp weapon choice
function computerPlay() {
  let randomValue = gameValues[Math.floor(Math.random() * gameValues.length)];
  return randomValue;
}

// game function
function playGame(playerSelection) {
  computerSelection = computerPlay();
  if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    compScore += 1;
    roundWinner = "computer";
  }
  if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 1;
    roundWinner = "player";
  }
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (playerScore === 5 || compScore === 5) {
    isGameOver();
    playAgain();
    overlay.classList.add('active');
  }
  updateScore();
  changeScoreMsg();
}

// gameover check
function isGameOver() {
  buttons.forEach((button) => {
    button.setAttribute("disabled", "");
    button.classList.add("disabled-button");
  });
}

// play game
function memChoice(e) {
  playerSelection = e.target.classList[e.target.classList.length - 1];
  playGame(playerSelection);
}

// update score
function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else {
    scoreInfo.textContent = "You lost!";
  }
  playerScoreValue.textContent = `Player: ${playerScore}`;
  computerScoreValue.textContent = `Enemy: ${compScore}`;
}

// change score msg
function changeScoreMsg() {
  if (roundWinner === "player") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} crushes ${computerSelection}`;
  }
  if (roundWinner === "computer") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is owned by ${computerSelection}`;
  }
  if (roundWinner === "tie") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection}`;
  }
}

// capitalize first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// set final msg
// function setFinalMsg() {
//   return playerScore > compScore ? 
// }

// consts for change DOM
const scoreInfo = document.getElementById("scoreInfo");
const scoreMsg = document.getElementById("scoreMsg");
const playerScoreValue = document.getElementById("playerScore");
const computerScoreValue = document.getElementById("compScore");
const playAgainButton = document.getElementById("restartBtn");
const overlay = document.getElementById("overlay");

// show play again button
function playAgain() {
  playAgainButton.style.visibility = "visible";
  playAgainButton.addEventListener("click", reloadGame);
}

// reload game
function reloadGame() {
  playerScore = 0;
  compScore = 0;
  scoreInfo.textContent = "Choose your weapon, man.";
  scoreMsg.textContent = "Score 5 points and you will win!";
  playerScoreValue.textContent = "Player: 0";
  computerScoreValue.textContent = "Computer: 0";
  buttons.forEach((button) => {
    button.removeAttribute("disabled");
    button.classList.remove("disabled-button");
  });
  playAgainButton.style.visibility = "hidden";
  overlay.classList.remove('active');
}

// choice all buttons from page
const buttons = document.querySelectorAll(".btn");

// player choices rock, paper or scissors for fight; activate game;
buttons.forEach((btn) => {
  btn.addEventListener("click", memChoice);
});
