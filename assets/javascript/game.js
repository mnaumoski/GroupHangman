// Global variables; these are accessible to every child

// create an array of words to guess

var wordList = ["crow","khaleesi","maester", "nightshade","smallfolk", "unsullied","valyrian", "targaryen", "stark","baratheon", "warg", "westeros","wildfire", "wildling", "lannister","dothraki","braavosi","raven","brothel","seven","climb"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0; 
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {
	numGuesses = 9;
	chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
	lettersInChosenWord = chosenWord.split("");
	numBlanks = lettersInChosenWord.length;

	console.log(chosenWord);

	blanksAndSuccesses = [];
	wrongGuesses =[];

	for (var i=0; i<numBlanks; i++) {
		blanksAndSuccesses.push("_");

	}

	console.log(blanksAndSuccesses);

	document.getElementById("guessesLeft").innerHTML = numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");

}

function checkLetters(letter) {
	var letterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(chosenWord[i] == letter){
			letterInWord = true;
		}
	}

	if (letterInWord) {
		for (var i = 0; i<numBlanks; i++) {
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		
		}
		console.log(blanksAndSuccesses);
	}
	else 
		{
			wrongGuesses.push(letter);
			numGuesses--;

	}
}

function roundComplete(){
	console.log("WinCount: " + winCounter + "| LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
}



