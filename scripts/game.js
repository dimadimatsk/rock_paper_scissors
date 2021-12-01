const gameValues = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let randomValue = gameValues[Math.floor(Math.random() * gameValues.length)];
  return randomValue;
}

function foolCheck() {
  playerSelection = prompt("Choice your weapon (Rock, Paper or Scissors)!");
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  while (gameValues.includes(playerSelection) === false) {
    alert(
      "Wrong weapon. Choice from available items (Rock, Paper or Scissors)!"
    );
    playerSelection = prompt("Choice your weapon (Rock, Paper or Scissors)!");
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  }
  return playerSelection;
}

function theGame() {
  playerSelection = foolCheck();
  computerSelection = computerPlay();
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 2;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 2;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 2;
  } else {
    alert(`It's a draw!`);
    return 1;
  }
}

let yourScore = 0;
let compScore = 0;

while (compScore < 5 && yourScore < 5) {
  switch (theGame()) {
    case 2:
      yourScore += 1;
      break;
    case 0:
      compScore += 1;
      break;
    default:
      yourScore += 0;
      compScore += 0;
      break;
  }
}

function scoreAnouncer() {
  if (yourScore > compScore) {
    alert(`You win! ${yourScore} - ${compScore}`);
  } else {
    alert(`You lose! ${yourScore} - ${compScore}`);
  }
}

scoreAnouncer();
