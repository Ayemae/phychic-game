var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = undefined;
console.log("Computer's letter: " + randomLetter);

var wins = 0;
var losses = 0;
var remainingGuesses = 9;

var userGuessArray = [];

var errorMessage = " ";


function startNewGame() {
    var randomLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)]
    console.log("Computer's letter: " + randomLetter);


    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();

        if (Alphabet.indexOf(userGuess) != -1) {
            errorMessage = " ";

            if (userGuessArray.indexOf(userGuess) === -1) {
                console.log("My letter: " + userGuess);
                errorMessage = " ";

                if (userGuess === randomLetter) {
                    wins++;
                    remainingGuesses = 9;
                    userGuessArray = [];
                    startNewGame();
                }
                else {
                    remainingGuesses--;
                    userGuessArray.push(userGuess);
                }

                if (remainingGuesses === 0) {
                    losses++;
                    remainingGuesses = 9;
                    userGuessArray = [];
                    startNewGame();
                }
            } else {
                errorMessage = "<p> ! You already guessed that letter. </p>";
            }
        }
        else {
            errorMessage = "<p> ! Use a letter key. </p>";
        }
    }

}




addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        addEventListener("keyup", function (event) {
            {

                startNewGame();
            }


            var guesseshtml = "<p> Your Guesses <br/> <span>" + userGuessArray.join(" ") + "</span> </p>";

            var statshtml =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Remaining Guesses: " + remainingGuesses + "</p>";

            var errorhtml = errorMessage;

            document.querySelector("#guesses").innerHTML = guesseshtml;
            document.querySelector("#game").innerHTML = statshtml;
            document.querySelector("#error").innerHTML = errorhtml;

        });
    }
});


