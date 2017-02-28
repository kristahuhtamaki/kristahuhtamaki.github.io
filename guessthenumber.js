function getRandomInteger(min, max) {
    "use strict";
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var correctNumber = getRandomInteger(1, 10);
function compareNumbers(first, second) {
    "use strict";
	return (first === second);
}


function guessTheNumber() {

    "use strict";
	var usersNumber = document.getElementById("number").value;
	if (!Number.isInteger(usersNumber) && usersNumber <= 1 && usersNumber >= 10) {
		window.alert("Syötetty luku ei kelpaa");
	}

	if (compareNumbers(correctNumber, usersNumber)) {
		window.alert("Arvasit oikein!");
	} else {
		window.alert("Arvasit väärin..." + correctNumber);
	}

	correctNumber = getRandomInteger(1, 10);
}

document.getElementById("button").addEventListener("click", guessTheNumber);