function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var correctNumber = getRandomInteger(1, 10);

function compareNumbers(first, second) {
	return (first == second);
}

document.getElementById("button").addEventListener("click", guessTheNumber);


function guessTheNumber() {

	var usersNumber = document.getElementById("number").value;
    
	if (!Number.isInteger(usersNumber) && (usersNumber <= 1 && usersNumber >= 10)){
		alert("Syötetty luku ei kelpaa");
	}

	if(compareNumbers(correctNumber, usersNumber)){
		window.alert("Arvasit oikein!");
	}else{
		window.alert("Arvasit väärin...");
	}

	numberToGuess = getRandomInteger(1, 10);
}