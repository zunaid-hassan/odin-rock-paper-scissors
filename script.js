const log = console.log;

// Initialize variables
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

// DOM elements
const body = document.querySelector("body");
const footer = document.querySelector("footer");

const roundContainer = document.createElement("div");
roundContainer.classList = "round-container";

const choiceContainer = document.createElement("div");
choiceContainer.classList = "choice-container";

const playerChoiceText = document.createElement("div");
playerChoiceText.classList = "player-choice-container";

const computerChoiceText = document.createElement("div");
computerChoiceText.classList = "computer-choice-container";

const roundNumberText = document.createElement("div");
roundNumberText.classList = "round-number";
roundNumberText.textContent = `Round Number: ${roundNumber}`;

body.insertBefore(roundNumberText, footer);
choiceContainer.appendChild(playerChoiceText);
choiceContainer.appendChild(computerChoiceText);
roundContainer.appendChild(choiceContainer);

function getComputerChoice() {
  let choiceNum = Math.random();
  let computerChoice = "";

  if (choiceNum <= 0.3) {
    computerChoice = "Rock\r\n🪨";
    return computerChoice;
  } else if (choiceNum > 0.3 && choiceNum <= 0.6) {
    computerChoice = "Paper\r\n📃";
    return computerChoice;
  } else {
    computerChoice = "Scissors\r\n✂️";
    return computerChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "Rock\r\n🪨") {
      return "It's a tie! Rock and Rock!";
      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
    } else if (computerChoice === "Paper\r\n📃") {
      computerScore++;
      return "You lose! Paper beats Rock!";

      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return computerScore;
    } else {
      humanScore++;

      return "You win! Rock beats Scissors!";
      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return humanScore;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "Rock\r\n🪨") {
      humanScore++;
      return "You win! Paper beats Rock!";

      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return humanScore;
    } else if (computerChoice === "Paper\r\n📃") {
      return "It's a tie! Paper and Paper!";
      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
    } else {
      computerScore++;
      return "You lose! Scissors beats Paper!";

      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return computerScore;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "Rock\r\n🪨") {
      computerScore++;
      return "You lose! Rock beats Scissors!";

      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return computerScore;
    } else if (computerChoice === "Paper\r\n📃") {
      humanScore++;
      return "You win! Scissors beats Paper!";

      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
      // return humanScore;
    } else {
      return "It's a tie! Scissors and Scissors!";
      // log("Human score: " + humanScore + ", Computer score: " + computerScore);
    }
  }
}

let btnContainer = document.querySelector("#button-container");

btnContainer.addEventListener("click", roundClick);

function roundClick(event) {
  const target = event.target;
  const id = target.id;

  if (id !== "rock" && id !== "paper" && id !== "scissors") {
    return;
  }

  const playerSelection = id;
  const computerSelection = getComputerChoice();

  playerChoiceText.textContent = "You chose: " + target.textContent;

  computerChoiceText.textContent = "Computer chose: \r\n" + computerSelection;

  const resultContainer = document.createElement("div");
  resultContainer.classList = "result-container";

  const resultMessage = playRound(playerSelection, computerSelection);
  resultContainer.textContent =
    resultMessage +
    `\r\nYour score: ${humanScore}\r\nComputer score: ${computerScore}`;

  const roundContainer2 = document.createElement("div");
  roundContainer2.classList = "round-container2";
  roundContainer2.appendChild(resultContainer);

  roundContainer.appendChild(resultContainer);
  body.insertBefore(roundContainer, footer);

  roundNumber++;
  roundNumberText.textContent = `Round Number: ${roundNumber}`;

  console.log(roundNumber);
  gameCheck();
}

function gameCheck() {
  if (humanScore === 5) {
    btnContainer.removeEventListener("click", roundClick);
    const winner = document.createElement("div");
    winner.classList = "winner-container";
    winner.textContent = "You win!";
    body.insertBefore(winner, footer);
  } else if (computerScore === 5) {
    btnContainer.removeEventListener("click", roundClick);
    btnContainer.removeEventListener("click", roundClick);
    const winner = document.createElement("div");
    winner.classList = "winner-container";
    winner.textContent = "Computer wins!";
    body.insertBefore(winner, footer);
  }
}
