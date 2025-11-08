const log = console.log;

// Initialize variables
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";

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
  humanChoice = prompt("Type: Rock, Paper or Scissors", undefined);
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

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   if (computerScore > humanScore) {
//     log("Sorry! The computer wins with a score of: " + computerScore);
//   } else if (computerScore < humanScore) {
//     log("Yay! You have won with a score of: " + humanScore);
//   } else {
//     log("Oops! It's a tie!");
//   }
// }

//   if (computerScore > humanScore) {
//     log("Sorry! The computer wins with a score of: " + computerScore);
//   } else if (computerScore < humanScore) {
//     log("Yay! You have won with a score of: " + humanScore);
//   } else {
//     log("Oops! It's a tie!");
//   }
// }

// playGame();

let btnList = document.querySelectorAll("button");
// let btnRock = document.querySelector("#rock");

// btnRock.addEventListener("click", () => console.log(btnRock));

// btnRock.addEventListener("click", value);

// function value(e) {
//   console.log(e);
// }

// console.log(btnList);

// btnList.forEach((button) => {
//   button.addEventListener("click", () => console.log(button));
// });
