// const for game
const gameValues = ["rock", "paper", "scissors"];

// consts for change DOM
const scoreInfo = document.getElementById("scoreInfo");
const scoreMsg = document.getElementById("scoreMsg");
const playerScoreValue = document.getElementById("playerScore");
const computerScoreValue = document.getElementById("compScore");
const playAgainButton = document.getElementById("restartBtn");
const overlay = document.getElementById("overlay");
const endMsg = document.getElementById("endMsg");
const endBox = document.getElementById("endBox");
const btnImages = document.querySelectorAll(".img_choice");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const faceFirst = document.getElementById("first_face");
const faceSecond = document.getElementById("second_face");

// eventlistner
rockBtn.addEventListener("click", () => choiceWeapon("rock"));
paperBtn.addEventListener("click", () => choiceWeapon("paper"));
scissorsBtn.addEventListener("click", () => choiceWeapon("scissors"));
playAgainButton.addEventListener("click", reloadGame);
overlay.addEventListener("click", closeFinalMsgBox);

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
function playRound(playerSelection, computerSelection) {
  deLightningFace();
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

// meme choices
function choiceWeapon(playerSelection) {
  if (playerScore === 5 || compScore === 5) {
    openFinalMsgBox();
    setFinalMsg();
    return;
  }
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateScore();
  changeScoreMsg(playerSelection, computerSelection);
  if (playerScore === 5 || compScore === 5) {
    openFinalMsgBox();
    setFinalMsg();
    return;
  }
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

// change score msg, add winner face, highlight winner face
function changeScoreMsg(playerSelection, computerSelection) {
  if (roundWinner === "player") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} crushes ${computerSelection}`;
    faceFirst.src = "./images/win.png";
    faceSecond.src = "./images/lose.png";
    faceFirst.classList.add("winner");
  }
  if (roundWinner === "computer") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is owned by ${computerSelection}`;
    faceFirst.src = "./images/lose.png";
    faceSecond.src = "./images/win.png";
    faceSecond.classList.add("winner");
  }
  if (roundWinner === "tie") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection}`;
    faceFirst.src = "./images/tie.png";
    faceSecond.src = "./images/tie.png";
  }
}

// de-lightning
function deLightningFace() {
  faceFirst.classList.remove("winner");
  faceSecond.classList.remove("winner");
}

// capitalize first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// reload game
function reloadGame() {
  deLightningFace();
  faceFirst.src = "./images/main.png";
  faceSecond.src = "./images/main.png";
  playerScore = 0;
  compScore = 0;
  scoreInfo.textContent = "Choose your weapon, man.";
  scoreMsg.textContent = "Score 5 points and you will win!";
  playerScoreValue.textContent = "Player: 0";
  computerScoreValue.textContent = "Computer: 0";
  overlay.classList.remove("active");
  endBox.classList.remove("active");
}

// open final msg box
function openFinalMsgBox() {
  endBox.classList.add("active");
  overlay.classList.add("active");
}

// close final msg box
function closeFinalMsgBox() {
  endBox.classList.remove("active");
  overlay.classList.remove("active");
}

// final score message
function setFinalMsg() {
  return playerScore > compScore
    ? (endMsg.textContent = "You won!")
    : (endMsg.textContent = "You lose!");
}
