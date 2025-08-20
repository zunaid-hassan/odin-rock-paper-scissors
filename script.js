const log = console.log;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choiceNum = Math.random();
  //   log(choiceNum);
  let computerChoice = "";

  if (choiceNum <= 0.3) {
    computerChoice = "Rock";
    return computerChoice;
  } else if (choiceNum > 0.3 && choiceNum <= 0.6) {
    computerChoice = "Paper";
    return computerChoice;
  } else {
    computerChoice = "Scissors";
    return computerChoice;
  }
}

function getHumanChoice() {
  let humanChoice = "";
  humanChoice = prompt("Select Rock, Paper or Scissors", undefined);
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}
// log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "Rock") {
      log("It's a tie! Rock and Rock");
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
    } else if (computerChoice === "Paper") {
      log("You lose! Paper beats Rock");
      computerScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return computerScore;
    } else {
      log("You win! Rock beats Scissors");
      humanScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return humanScore;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "Rock") {
      log("You win! Paper beats Rock");
      humanScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return humanScore;
    } else if (computerChoice === "Paper") {
      log("It's a tie! Paper and Paper");
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
    } else {
      log("You lose! Scissors beats Paper");
      computerScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return computerScore;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "Rock") {
      log("You lose! Rock beats Scissors");
      computerScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return computerScore;
    } else if (computerChoice === "Paper") {
      log("You win! Scissors beats Paper");
      humanScore++;
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
      return humanScore;
    } else {
      log("It's a tie! Scissors and Scissors");
      log("Human score: " + humanScore + ", Computer score: " + computerScore);
    }
  }
}

let humanSelection = "";
let computerSelection = "";

// log(humanSelection);
// log(computerSelection);
// playRound(humanSelection, computerSelection);

function playGame() {
  // Round 1
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // Round 2
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // Round 3
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // Round 4
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // Round 5
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

playGame();
