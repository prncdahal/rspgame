const playerSelectionBtns = document.querySelectorAll('#user-select-option .btn');
const computerSelectionBtns = document.querySelectorAll('#computer-selection .btn');

const playerScoreCount = document.querySelector('#player-score .count');
const ComputerScoreCount = document.querySelector('#computer-score .count');

let playerScore = 0;
let ComputerScore = 0;

// click event does not work with querySelectorAll so have to use forEach method to get each item
playerSelectionBtns.forEach(function(playerSelectionBtn, index) {
	playerSelectionBtn.addEventListener('click', function(e) {
		const clickedBtn = this.getAttribute("title"); // Detecting clicked button by attribute.
		const getComputerSelection = computerSelectionBtns[Math.floor(Math.random() * 3)].getAttribute("title");
		if (clickedBtn === "Rock" && getComputerSelection === "Rock") {
			alert("tie");

		} else if (clickedBtn === "Rock" && getComputerSelection === "Paper") {
			alert("Computer Wins!");
            ComputerScore=ComputerScore+1;
            ComputerScoreCount.textContent=ComputerScore;

		} else if (clickedBtn === "Rock" && getComputerSelection === "Scissor") {
			alert("You Win!!");
            playerScore=playerScore+1;
            playerScoreCount.textContent=playerScore;
		}
		if (clickedBtn === "Paper" && getComputerSelection === "Rock") {
			alert("You Win");
            playerScore = playerScore + 1;
            playerScoreCount.textContent=playerScore;
		} else if (clickedBtn === "Paper" && getComputerSelection === "Paper") {
			alert("Tie");
		} else if (clickedBtn === "Paper" && getComputerSelection === "Scissor") {
			alert("Computer Win");
            ComputerScore=ComputerScore+1;
            ComputerScoreCount.textContent=ComputerScore;
		}
		if (clickedBtn === "Scissor" && getComputerSelection === "Rock") {
			alert("You Win");
            playerScore=playerScore+1;
            playerScoreCount.textContent=playerScore;
		} else if (clickedBtn === "Scissor" && getComputerSelection === "Paper") {
			alert("Tie");
		} else if (clickedBtn === "Scissor" && getComputerSelection === "Scissor") {
			alert("Computer Win");
            ComputerScore=ComputerScore+1;
            ComputerScoreCount.textContent=ComputerScore;
		}
	});
});