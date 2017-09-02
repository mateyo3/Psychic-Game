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

	document.onkeyup = function(event) {

	var lettersGuessed = event.key;
		console.log(lettersGuessed);

// letterGuesses gets placed into empty array
	var lettersArray = [];
	 var UserGuesses = lettersArray.unshift(lettersGuessed);
		console.log(lettersArray);

	document.getElementById('lettersGuessed').innerHTML = lettersArray;

// letterGuessed is displayed in console and html
	for (var i = 0; i < lettersArray.length; i++) {
        console.log(lettersArray[i]);
    }

	  // document.querySelector("#lettersGuessed").innerHTML = lettersArray[i];

// If userPick == computerChoice
	for (i = 0; i < 9; i++){

	}

		if (lettersGuessed == computerChoice) {
		// Then winsCount +1
			winsCount = + 1;
				console.log(winsCount);
				//break loop
		}

		else {
			guessesRemaining = - 1;
				console.log(guessesRemaining);
			if (guessesRemaining == 0){
				guessesRemaining = 9;
				//break loop
			}
			
		}


// var html = ('guessesRemaining') + guessesRemaining;
// var html = ('winsCount') + winsCount;
// var html = ('lossesCount') + lossesCount;



// If onkeyup happens

// guessesRemaining -1 || guessesRemaining == 0


// Then computerChoice resets
// && LossesCount +1 



	}

