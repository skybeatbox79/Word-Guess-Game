// Variables
var teams = [
    {
        team: "argentina",
        image: "assets/images/argentina.png"
    },
    {
        team: "austrailia",
        image: "assets/images/austrailia.png"
    },
    {
        team: "belgium",
        image: "assets/images/belgium.png"
    },
    {
        team: "brazil",
        image: "assets/images/brazil.png"
    },
    {
        team: "colombia",
        image: "assets/images/colombia.png"
    },
    {
        team: "costa rica",
        image: "assets/images/costa-rica.png"
    },
    {
        team: "croatia",
        image: "assets/images/belgium.png"
    },
    {
        team: "denmark",
        image: "assets/images/denmark.png"
    },
    {
        team: "egypt",
        image: "assets/images/egypt.png"
    },
    {
        team: "england",
        image: "assets/images/england.png"
    },
    {
        team: "france",
        image: "assets/images/france.png"
    },
    {
        team: "germany",
        image: "assets/images/germany.png"
    },
    {
        team: "iceland",
        image: "assets/images/iceland.png"
    },
    {
        team: "iran",
        image: "assets/images/iran.png"
    },
    {
        team: "japan",
        image: "assets/images/japan.png"
    },
    {
        team: "mexico",
        image: "assets/images/mexico.png"
    },
    {
        team: "morocco",
        image: "assets/images/morocco.png"
    },
    {
        team: "nigeria",
        image: "assets/images/nigeria.png"
    },
    {
        team: "panama",
        image: "assets/images/panama.png"
    },
    {
        team: "peru",
        image: "assets/images/peru.png"
    },
    {
        team: "poland",
        image: "assets/images/poland.png"
    },
    {
        team: "portugal",
        image: "assets/images/portugal.png"
    },
    {
        team: "russia",
        image: "assets/images/russia.png"
    },
    {
        team: "saudi arabia",
        image: "assets/images/saudi-arabia.png"
    },
    {
        team: "senegal",
        image: "assets/images/senegal.png"
    },
    {
        team: "serbia",
        image: "assets/images/serbia.png"
    },
    {
        team: "south korea",
        image: "assets/images/south-korea.png"
    },
    {
        team: "spain",
        image: "assets/images/spain.png"
    },
    {
        team: "sweden",
        image: "assets/images/sweden.png"
    },
    {
        team: "switzerland",
        image: "assets/images/switzerland.png"
    },
    {
        team: "tunisia",
        image: "assets/images/tunisia.png"
    },
    {
        team: "uruguay",
        image: "assets/images/uruguay.png"
    }];

var randomNum = Math.floor(Math.random() * teams.length);
var choosenTeam = teams[randomNum];
var underScore = [];
var wrongWord = [];

var docUnderScore = document.getElementById("#underScore");
var docWrongGuess = document.getElementById("#wrongGuess");

var genUndersocre = () => {
    for(var i = 0; i < choosenTeam.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(keyCode);
    if(choosenTeam.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        
        underScore[choosenTeam.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');

        if(underScore.join('') == choosenTeam) {
            alert("You Got It!");
        }
    } else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});

UnderScore[0].innerHTML = genUndersocre().join('');