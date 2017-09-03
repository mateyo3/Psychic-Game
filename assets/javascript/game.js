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

// user presses key to guess letter
// letterGuesses gets placed into empty array

	var lettersArray = [];

	document.onkeyup = function(event) {
		lettersGuessed = event.key;
		lettersArray.push(lettersGuessed);
	
	// letterGuessed is displayed in console and html
		console.log(lettersGuessed);
		console.log(lettersArray);
		
		document.getElementById('lettersGuessed').innerHTML = lettersArray;

// If userPick == computerChoice
	
		if (lettersGuessed == computerChoice) {
		// Then winsCount +1
			winsCount ++;
			document.getElementById("winsCount").innerHTML = winsCount;
				console.log(winsCount);
				// if user gets correct answer
				// then, computer chooses new letter 
		}

		else {
			guessesRemaining --;
			document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
				console.log(guessesRemaining);
			if (guessesRemaining == 0){
				guessesRemaining = 9;
				lossesCount ++;
				// if user gets correct answer
				// then, computer chooses new letter
			}
		}
	}




