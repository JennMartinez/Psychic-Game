// Create variables for the array, wins, losses, etc...//
// Global variable //
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Local variables //
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Create the COMPUTERS random guess //
var compGuess = allLetters[Math.floor(Math.random() * allLetters.length)]; 
console.log("Computer Guess: " + compGuess);

// Create the USERS guess //
document.onkeyup = function(event) {
   
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log("userguess", userGuess);

// USER guess versus COMPUTER guess //
if (guessesSoFar.indexOf(userGuess) <= 0 && allLetters.indexOf(userGuess) >= 0) {
	guessesSoFar[guessesSoFar.length]=userGuess;
    guessesLeft--;
    console.log("Guesses Remaining" + guessesLeft);
}

// USER guess and COMPUTER guess are the same //
if (compGuess == userGuess) {
    wins++;
    guessesLeft = 9;     
    guessesSoFar = [];
    compGuess = allLetters[Math.floor(Math.random() * allLetters.length)]; 
    console.log("Computer Guess: " + compGuess);
}

// The counter reaches 0, and the game should reset itself. The counter does not reset once the user reaches 9 losses. This is something I need guidance on. //
if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessesSoFar = [];
    compGuess = allLetters[Math.floor(Math.random() * allLetters.length)]; 
    console.log("Computer Guess: " + compGuess);
    console.log("Guesses Left: " + guessesLeft);
}

// Display stats in browser //
var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guesses So Far: " + guessesSoFar + "</p>"; 

document.getElementById("psychic").innerHTML = html;

}
