let playerCounter = 0;
let compCounter = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // rand formula(max inclusive) = Math.floor(Math.random() * (max - min + 1) ) + min;
    let rand = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    //console.log("Current rand: " + rand);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Ouch! Paper beats Rock";
        compCounter++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Ouch! Scissors beat Paper";
        compCounter++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Ouch! Rock beats Scissors";
        compCounter++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Great! Rock beats Scissors";
        playerCounter++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Great! Scissors beat Paper";
        playerCounter++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Great! Paper beats Rock";
        playerCounter++;
    } else {
        result = "No points";
    }
    return result;
}

function checkInput() {

    let answer = prompt("Paper, Rock, or Scissors?");
    answer = answer.toLowerCase();

    while (answer !== "rock" && answer !== "scissors" && answer !== "paper") {
        answer = prompt("Please type in rock, scissors, or paper only");
        answer = answer.toLowerCase();
    }

    return answer;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = checkInput();
        let compSelection = getComputerChoice();
        console.log(playRound(playerSelection, compSelection));
    }
    if (playerCounter > compCounter) {
        console.log("You won the game!\n" +
            "Your total points: " + playerCounter + "\n" +
            "Computer total points: " + compCounter);
    } else if (playerCounter < compCounter) {
        console.log("The Computer won!\n" +
            "Your total points: " + playerCounter + "\n" +
            "Computer total points: " + compCounter);
    } else {
        console.log("It's a Draw!\n" + playerCounter +
            " point(s) for each player");
    }
}

game();