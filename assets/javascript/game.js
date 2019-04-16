var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



document.onkeydown = function(event)
  {
      var userGuess = event.key;
      var computerGuess = letters[Math.floor(Math.random() * letters.length)];

      if(userGuess === letters);
      console.log (userGuess)
      console.log ("Opponent guesses " + computerGuess);
      else {alert ("Invalid key. Please choose a letter.");}
  }