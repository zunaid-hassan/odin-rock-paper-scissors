const log = console.log;


function getComputerChoice () {
    let choiceNum = Math.random();
    let computerChoice = "";
    log(choiceNum);

    if (choiceNum <= 0.3) {
        computerChoice = "Rock";
        return computerChoice;
    } else if (choiceNum >0.3 && choiceNum <= 0.6) {
        computerChoice = "Paper";
        return computerChoice
    } else {
        computerChoice = "Scissors";
        return computerChoice;
    }
};

function getHumanChoice(){
    let humanChoice = prompt("Select Rock, Paper or Scissors", undefined);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){

}

let humanScore = 0;
let computerScore = 0;

log(getComputerChoice());
log(getHumanChoice());