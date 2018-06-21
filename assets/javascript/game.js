// Variables
var teams = ["argentina", "austrailia", "belgium", "brazil", "colombia", "costarica", "croatia", "denmark", "egypt", "england", "france", "germany", "iceland", "iran", "japan", "mexico", "morocco", "nigeria", "panama", "peru", "poland", "portugal", "russia", "saudiarabia", "senegal", "serbia", "southkorea", "spain", "sweden", "switzerland", "tunisia", "uruguay"];
var chosenTeam = "";
var lettersInChosenTeam = [];
var numBlanks = 0;
var currentStatus = [];
var wrongGuesses = [];
var winCounter = 0;
var numGuesses = 10;

// Functions

// To start a (new) game
function newGame() {
    numGuesses = 10;
    chosenTeam = teams[Math.floor(Math.random() * teams.length)];
    lettersInChosenTeam = chosenTeam.split("");
    numBlanks = lettersInChosenTeam.length;

    currentStatus = [];
    wrongGuesses= [];

    for (var i = 0; i < numBlanks; i++) {
        currentStatus.push("_");
    }
    
    document.getElementById("numGuessesRemaining").innerHTML = numGuesses;
    document.getElementById("underScore").innerHTML = currentStatus.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");
}

// Check letters from answer and apply functions for the amount of guesses
function checkLetters(letter) {
    var letterInTeam = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenTeam[i] === letter) {
            letterInTeam = true;
        }
    }

    if (letterInTeam) {
        for (i = 0; i < numBlanks; i++) {
            if (chosenTeam[i] === letter) {
                currentStatus[i] = letter;
            }
        }
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

// Alert message based on the result and rest the game
function gameSet() {
    document.getElementById("numGuessesRemaining").innerHTML = numGuesses;
    document.getElementById("underScore").innerHTML = currentStatus.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenTeam.toString() === currentStatus.toString()) {
        winCounter++;
        alert("GOAL GOAL GOAL!!!!!");

        document.getElementById("numWins").innerHTML = winCounter;
        newGame();
    } 
    
    else if (numGuesses === 0) {
        alert("Try Again!");
        newGame();
    }
}

// To start a new game
newGame();

// To run the codes for the game
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    gameSet();
};