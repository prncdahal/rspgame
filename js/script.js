// Algorithm, Pseudo code and planning to solve the problem before diving right in to the code
// Rock Paper scissors
// Process: rock beat scissors, scissors beat paper, paper beat rock

// 1 step: get the value of user: PlayerSelection
// 2 step: get the random value of cpu: computerSelection
// 3: check the user input and cpu return value: 

// rock=rock => tie
// rock=paper => paper wins
// rock=scissor => rock wins

// paper=rock => paper wins
// paper=paper=> tie
// paper=> scissors=> scissors win

// scissor = rock =>rock wins
// scissors= paper=>paper wins
// scissors=scissor=>tie

// ### Problem 2
/**Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
 * 
 * 
 */



const computerPlay = () => {
    let option = ["rock", "paper", "scissor"];
    let value = Math.floor(option.length * Math.random());
    return option[value];
}

computerPlay();

let playWinCount = 0;
let compWinCount = 0;
const selection = (PlayerSelection, cpuSelection) => {


    if (PlayerSelection === "Rock" && cpuSelection === "Rock") {
        console.log("Tie");
    } else if (PlayerSelection === "Rock" && cpuSelection === "Paper") {
        console.log("Computer wins");
        compWinCount++;
    } else if (PlayerSelection === "Rock" && cpuSelection === "Scissor") {
        console.log("You Win!!");
        playWinCount++;
    }

    if (PlayerSelection === "paper" && cpuSelection === "rock") {

      console.log("You Win!!");
      playWinCount++;

    } else if (PlayerSelection === "paper" && cpuSelection === "Paper") {
        console.log("Tie");
    } else if (PlayerSelection === "paper" && cpuSelection === "scissor") {
        console.log("Computer Win");
        compWinCount++;
    }

    if (PlayerSelection === "scissor" && cpuSelection === "rock") {
        console.log("Computer Win!!");
        compWinCount++;
    } else if (PlayerSelection === "scissor" && cpuSelection === "paper") {
        console.log("You Win!!");
        playWinCount++;
    } else if (PlayerSelection === "scissor" && cpuSelection === "scissor") {
        console.log("Tie");
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        selection("scissor", computerPlay());
    }
    if (playWinCount > compWinCount) {
        console.log("You Win!! Congrats");

    } else if (compWinCount > playWinCount) {
        console.log("Computer wins!!");
    } else {
        console.log("It's a tie");
    }
}
game();


//  Took Time: 1hr as a beginner