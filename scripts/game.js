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
}

// gameover check
function isGameOver() {
  if (playerScore === 5 || compScore === 5) {
    return true;
  }
  return false;
}

// play game

function memChoice(e) {
  playerSelection = e.target.classList[e.target.classList.length - 1];
  if (isGameOver === true) {
    return;
  }
  playGame(playerSelection);
  updateScore();
  changeScoreMsg();
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
  };
};

// capitalize first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// consts for change DOM
const scoreInfo = document.getElementById("scoreInfo");
const scoreMsg = document.getElementById("scoreMsg");
const playerScoreValue = document.getElementById("playerScore");
const computerScoreValue = document.getElementById("compScore");

// choice all buttons from page
const buttons = document.querySelectorAll(".btn");

// player choices rock, paper or scissors for fight; activate game;
buttons.forEach((btn) => {
  btn.addEventListener("click", memChoice);
});
