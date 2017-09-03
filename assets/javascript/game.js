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

var lettersArray = [];

	document.onkeyup = function(event) {
		lettersGuessed = event.key;
		lettersArray.push(lettersGuessed);
	
		console.log(lettersGuessed);
		console.log(lettersArray);
	
	document.getElementById('lettersGuessed').innerHTML = lettersArray;


// letterGuesses gets placed into empty array


	
	// lettersArray.push(lettersGuessed);
	// console.log(lettersArray);

	// while ()
	 // var UserGuesses = lettersArray.unshift(lettersGuessed);
		// console.log(lettersArray);


// letterGuessed is displayed in console and html
	// for (var i = 0; i < lettersArray.length; i++) {
 //        // console.log(lettersArray[i]);
 //    }
	
	  // document.querySelector("#lettersGuessed").innerHTML = lettersArray[i];

// If userPick == computerChoice
	
	// while ()
		if (lettersGuessed == computerChoice) {
		// Then winsCount +1
			winsCount ++;
			document.getElementById("winsCount").innerHTML = winsCount;
				console.log(winsCount);
				//computer chooses new leter

		}

		else {
			guessesRemaining --;
			document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
				console.log(guessesRemaining);
			if (guessesRemaining == 0){
				guessesRemaining = 9;
				lossesCount ++;
				//computer chooses new leter

			}
		}

	}



// function someFunction() {
//     document.getElementById("winsCount").innerHTML = ++winsCount;
// }
// var html = ('guessesRemaining') + guessesRemaining;
// var html = ('winsCount') + winsCount;
// var html = ('lossesCount') + lossesCount;



// If onkeyup happens

// guessesRemaining -1 || guessesRemaining == 0


// Then computerChoice resets
// && LossesCount +1 




