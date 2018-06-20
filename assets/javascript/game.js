const words = ["argentina", "austrailia", "belgium", "brazil", "colombia", "costa rica", "croatia", "denmark", "egypt", "england", "france", "germany", "iceland", "iran", "japan", "south korea", "mexico", "morocco", "nigeria", "panama", "peru", "poland", "portugal", "russia", "saudi arabia", "senegal", "serbia", "spain", "sweden", "switzerland", "tunisia", "uruguay"];

let randomNumber = Math.floor(Math.random() * words.length);
let choosenWord = words[randomNumber];
let underScore = [];
let rightWord = [];
let wrongWord = [];

// DOM Manipulation
let docUnderScore = document.getElementsByClassName("underscores");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");


console.log(choosenWord);
// Generate Underscores based on length of word
let genUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

// User Guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    // if Users guess is right
    if(choosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword); 
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
            // Checks to see if user word matches guesses
            if(underScore.join('') == choosenWord) {
                alert("You Win");
            }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});
    
genUnderScore[0].innerHTML = genUnderscore().join(' ');