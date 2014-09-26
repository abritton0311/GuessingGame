
/*Guessing game where the player chooses a team from the NFC Conference
 of the NFL to see if it can guess what team the computer is thinking of.
 The computer returns responses to prompt the player to guess again if 
 their choice is wrong, and once they guess it, tells them how many tries it took.*/

 //This is the array that lists all the NFC teams possible.

var teams = ["EAGLES",
      "REDSKINS",
      "COWBOYS",
      "GIANTS",
      "VIKINGS",
      "LIONS",
      "BEARS",
      "PACKERS",
      "PANTHERS",
      "FALCONS",
      "SAINTS",
      "BUCCANEERS",
      "SEAHAWKS",
      "49ERS",
      "CARDINALS",
      "RAMS",
      ];

/*This empty array holds the guesses that the users already
 guessed so they don't have to rely on their memory to make
  another guess.*/
var guesses = [];

//Math.floor is used to have the computer make a random choice of the available teams.
var computerChoice = teams[Math.floor((Math.random() * 16))];

//This is the initial prompt to explain the rules to the player. It only shows once.
var userPrompt = prompt("I am thinking of a football team \
 in the NFC Conference of the NFL. Can you guess which one? Make \
  a guess, but don't include the City name in your team name \
   guess(i.e. an example of an AFC team would be Dolphins.)").toUpperCase();

//pushes intial user guess to guesses array.
guesses.push(userPrompt)

//keeps count of the number of attempts.
var attempts = 0;
//used to control when while loop ends.
var userLose = true;

//Multiple responses if user guesses incorrectly. 
var responses = ["Nope! That's not the team I was thinking of. Try again!",
      "Good guess, but that's not the team I was thinking of. Try again!",
      "Not a match! Keep trying!",
      "That's not the team I picked. How many more guesses will it take for you to guess my team?",
      "I am thinking of a different team. Try again."];

//while loop that keeps running until the corrcect guess.
while (userLose) {
  //checking to see if the value user provides is in the teams array.
  if (teams.indexOf(userPrompt) === -1){
  userPrompt = prompt("Sorry, that's not an NFC team. Try again." + "\n\nYou have already tried:\n" + guesses).toUpperCase();
  guesses.push(userPrompt)
  attempts++;
 }
 //Checks to see if user guessed right on the first try.
  else if (userPrompt === computerChoice && attempts === 0) {
  alert("Congratulations!!! You guessed it on the first try. Great minds think alike!");
  userLose = false;
//checks to see if user guessed right on subsequent guesses and tells them how many guesses it took.
 } else if (userPrompt === computerChoice){
  alert("You guessed it! Congratulations, it only took you" +" " + attempts +" " + "tries to get it!");
  userLose = false;
 //shows the responses the player has already guessed.
 } else if (userPrompt != computerChoice) {
    userPrompt = prompt(responses[Math.floor((Math.random() * 5))] + "\n\nYou have already tried:\n" + guesses).toUpperCase();
    guesses.push(userPrompt)
    attempts++;
  }
 };
