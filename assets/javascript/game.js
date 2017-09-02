// Define variables

var winsCount = 0;
	lossesCount = 0;
	guessesRemaining = 9;



// computer chooses random letter
	var letters = [
		"a", "b", "c", "d", 
		"e", "f", "g", "h", 
		"i", "j", "k", "l", 
		"m", "n", "o", "p", 
		"q", "r", "s", "t",
		"u", "v", "w", "x",
		"y", "z"
		];
	
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
		console.log(computerChoice);

	document.onkeyup = function(event) {

	var lettersGuessed = event.key;
		console.log(lettersGuessed);

	var displayGuess = "Your guesses so far: " + (lettersGuessed);

		document.querySelector("#userGuesses").innerHTML = displayGuess; 

// If userPick == computerChoice
		if (lettersGuessed == computerChoice) {
		// Then winsCount +1
		winsCount = + 1;
			console.log(winsCount);
		}
		else {
			lossesCount = + 1;
				console.log(lossesCount);
		}
		





// If onkeyup happens

// guessesRemaining -1 || guessesRemaining == 0


// Then computerChoice resets
// && LossesCount +1 



	}

