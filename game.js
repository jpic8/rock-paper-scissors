//these variable keep track of the game progress
let playerScore = 0;
let computerScore = 0;
let moves = 0;

//function playerSelection will prompt the user for a decision of what to play
function playerSelection() {
  let playerChoice = prompt("What would you like to play? rock/paper/scissors");
  //converts string to lower case
  let playerDecision = playerChoice.toLowerCase();
  return playerDecision;
}

//function computerPlay will randomly return either 'rock', 'paper', or 'scissors'
function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  let decision = choices[randomNumber];
  return decision;
}

//function singleRound plays a round of RPS between user and computer
//it will increase playerScore or computerScore depending on who wins
//a tie or invalid user entry does not count as a move in a game of 5
function singleRound(player, computer) {
  const playerRound = playerSelection();
  const computerRound = computerSelection();

  if (playerRound == computerRound) {
    let result = "It's a tie, try again!";
    console.log(result);
  } else if (
    (playerRound == "rock" && computerRound == "scissors") ||
    (playerRound == "scissors" && computerRound == "paper") ||
    (playerRound == "paper" && computerRound == "rock")
  ) {
    playerScore += 1;
    moves += 1;
    console.log(`You win! ${playerRound} beats ${computerRound}`);
  } else if (
    (playerRound == "scissors" && computerRound == "rock") ||
    (playerRound == "paper" && computerRound == "scissors") ||
    (playerRound == "rock" && computerRound == "paper")
  ) {
    computerScore += 1;
    moves += 1;
    console.log(`You lose! ${computerRound} beats ${playerRound}`);
  }

  console.log(`Player had ${playerRound}`);
  console.log(`Computer had ${computerRound}`);
  return moves;
}

//function game will begin the play of the game and return the total moves and scores
function game() {
  while (moves < 5) {
    singleRound();
    console.log(`Total moves: ${moves}`);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score ${computerScore}`);
  }
}

game();
