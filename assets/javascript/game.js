const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guessed = []
var guessesLeft = 10;
var wins = 0;
var losses = 0;

document.onkeydown = function(event)
  {
      const  userGuess = event.key;
      var computerGuess = letters[Math.floor(Math.random() * letters.length)];

       console.log ("User guessed " + userGuess);
       console.log ("Opponent chose " + computerGuess);
       console.log("guessed");
       guessesLeft --;
  }

  if ("userGuess" === "computerGuess") 
  {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }
  if ("userGuess" == "computerGuess") 
  {
    losses++;
    document.querySelector("#wins").innerHTML = losses;
    reset();
  }

  // need guess counts to log in window and have the letters not refresh with each guess. I'm not sure how to do that. My last code bit for the wrong guess isn't quite right. I need it to sub from the guess count. I also need to have the letters logged to the window. I kept having a syntax error in my on key event, this held me up, I've finally figured out what I was doing wrong was listing "else" when JS was assuming that to be the case. I have several steps undone yet on this project. However, it is past due and I need to focus on current work.
