var userScore = 0
var computerScore = 0

function onClick(num) {
	var result = Math.floor(Math.random() * 3)
	var rock = false
	var paper = false
	var scissors = false


	if (result < 1) {
		rock = true
		document.getElementById("computerSelection").innerHTML = "Computer selected Rock";
	}
	else if (result < 2) {
		paper = true
		document.getElementById("computerSelection").innerHTML = "Computer selected Paper";
	}
	else if (result < 3) {
		scissors = true
		document.getElementById("computerSelection").innerHTML = "Computer selected Scissors";
	}

	if (num == 0) {
		if (rock == true) {
			document.getElementById("message").innerHTML = "It's a draw!";
		}
		else if (scissors == true) {
			document.getElementById("message").innerHTML = "You Win!";
			userScore += 1
		}
		else if (paper == true) {
			document.getElementById("message").innerHTML = "You Lose!";
			computerScore += 1
		}
		else {
			alert("Something went wrong")
		}		
	}
	if (num == 1) {
		if (rock == true) {
			document.getElementById("message").innerHTML = "You Win!";
			userScore += 1
		}
		else if (scissors == true) {
			document.getElementById("message").innerHTML = "You Lose!";
			computerScore += 1
		}
		else if (paper == true) {
			document.getElementById("message").innerHTML = "It's a draw!";
		}
		else {
			alert("Something went wrong")
		}		
	}
	if (num == 2) {
		if (rock == true) {
			document.getElementById("message").innerHTML = "You Lose!";
			computerScore += 1
		}
		else if (scissors == true) {
			document.getElementById("message").innerHTML = "It's a draw!";
		}
		else if (paper == true) {
			document.getElementById("message").innerHTML = "You Win!";
			userScore += 1
		}
		else {
			alert("Something went wrong")
		}
	}
	document.getElementById("computer").innerHTML = "Computer: " + computerScore;
	document.getElementById("user").innerHTML = "User: " + userScore;
}