// Variables
var teams = ["argentina", "austrailia", "belgium", "brazil", "colombia", "costarica", "croatia", "denmark", "egypt", "england", "france", "germany", "iceland", "iran", "japan", "mexico", "morocco", "nigeria", "panama", "peru", "poland", "portugal", "russia", "saudiarabia", "senegal", "serbia", "southkorea", "spain", "sweden", "switzerland", "tunisia", "uruguay"];
var chosenTeam = "";
var lettersInChosenTeam = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var numGuesses = 10;

function newGame() {
    numGuesses = 10;
    chosenTeam = teams[Math.floor(Math.random() * teams.length)];
    lettersInChosenTeam = chosenTeam.split("");
    numBlanks = lettersInChosenTeam.length;

    blanksAndSuccesses = [];
    wrongGuesses= [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    
    document.getElementById("numGuessesRemaining").innerHTML = numGuesses;
    document.getElementById("underScore").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");
}

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
                blanksAndSuccesses[i] = letter;
            }
        }
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

function gameSet() {
    document.getElementById("numGuessesRemaining").innerHTML = numGuesses;
    document.getElementById("underScore").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenTeam.toString() === blanksAndSuccesses.toString()) {
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

newGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    gameSet();
};