//global game variables
let playerScore = 0;
let computerScore = 0;
let moves = 0;

//DOM elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const roundResult = document.querySelector("#roundResult");
const playerResult = document.querySelector("#playerResult");
const computerResult = document.querySelector("#computerResult");
const scoreBoard = document.querySelector("#scoreBoard");
const gameReset = document.querySelector("#gameReset");

//listens to player choices by button click and starts singleRound function
rock.addEventListener("click", () => {
  singleRound("rock");
});
paper.addEventListener("click", () => {
  singleRound("paper");
});
scissors.addEventListener("click", () => {
  singleRound("scissors");
});

//function computerSelection will randomly return either 'rock', 'paper', or 'scissors'
function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

/*function singleRound plays a round of RPS between user and computer
it will increase playerScore or computerScore depending on who wins
a tie or invalid user entry does not count as a move in a game of 5*/
function singleRound(player, computer) {
  const playerRound = player;
  const computerRound = computerSelection();

  if (playerRound == computerRound) {
    roundResult.textContent = "It's a tie, try again!";
  } else if (
    (playerRound == "rock" && computerRound == "scissors") ||
    (playerRound == "scissors" && computerRound == "paper") ||
    (playerRound == "paper" && computerRound == "rock")
  ) {
    playerScore += 1;
    moves += 1;
    roundResult.textContent = `You win! ${playerRound} beats ${computerRound}`;
  } else if (
    (playerRound == "scissors" && computerRound == "rock") ||
    (playerRound == "paper" && computerRound == "scissors") ||
    (playerRound == "rock" && computerRound == "paper")
  ) {
    computerScore += 1;
    moves += 1;
    roundResult.textContent = `You lose! ${computerRound} beats ${playerRound}`;
  }
  playerResult.textContent = `player had ${playerRound}`;
  computerResult.textContent = `computer had ${computerRound}`;
  scoreKeeper(moves, playerScore, computerScore);
}

//function scoreKeeper will track the number of wins and declare the winner after 5
function scoreKeeper(moves, playerScore, computerScore) {
  if (moves < 5) {
    scoreBoard.textContent = `Game ${moves} | player score ${playerScore} | computer score ${computerScore}`;
  } else if ((moves = 5)) {
    input.style.display = "none";
    if (playerScore > computerScore) {
      roundResult.textContent = "You WIN! Congrats!";
    } else {
      roundResult.textContent = "Computer wins, try harder next time!";
    }
    scoreBoard.textContent = `Game ${moves} | player score ${playerScore} | computer score ${computerScore}`;
    gameReset.innerHTML =
      '<button onclick="location.reload()"> Play again? </button>';
  }
}
