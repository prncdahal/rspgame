// First Attempt

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


// Second Attempt: Logic preparation
 

// const computerPlay = () => {
//     let option = ["rock", "paper", "scissor"];
//     let value = Math.floor(option.length * Math.random());
//     return option[value];
// }

// computerPlay();

// let playWinCount = 0;
// let compWinCount = 0;
// const selection = (PlayerSelection, cpuSelection) => {


//     if (PlayerSelection === "Rock" && cpuSelection === "Rock") {
//         console.log("Tie");
//     } else if (PlayerSelection === "Rock" && cpuSelection === "Paper") {
//         console.log("Computer wins");
//         compWinCount++;
//     } else if (PlayerSelection === "Rock" && cpuSelection === "Scissor") {
//         console.log("You Win!!");
//         playWinCount++;
//     }

//     if (PlayerSelection === "paper" && cpuSelection === "rock") {

//       console.log("You Win!!");
//       playWinCount++;

//     } else if (PlayerSelection === "paper" && cpuSelection === "Paper") {
//         console.log("Tie");
//     } else if (PlayerSelection === "paper" && cpuSelection === "scissor") {
//         console.log("Computer Win");
//         compWinCount++;
//     }

//     if (PlayerSelection === "scissor" && cpuSelection === "rock") {
//         console.log("Computer Win!!");
//         compWinCount++;
//     } else if (PlayerSelection === "scissor" && cpuSelection === "paper") {
//         console.log("You Win!!");
//         playWinCount++;
//     } else if (PlayerSelection === "scissor" && cpuSelection === "scissor") {
//         console.log("Tie");
//     }
// }

// selection("scissor", computerPlay()); 


// After finding problem to render the login into UI Dom i tried to solve problem through functional thinking
/**
 * function1:  getUserSelection => return array index postition
 * function2:  getCpuValue     => retur array index position
 * function3:  compareValues  => returns random position, checks contion and then display the result
 * function4:  DisplayResult 
 */


const playerSelectionBtns = document.querySelectorAll('#user-select-option .btn');
const computerSelectionBtns = document.querySelectorAll('#computer-selection .btn');

// click event does not work with query selector all so have to use forEach method to get each item

// getUserSelection
playerSelectionBtns.forEach(function(playerSelectionBtn,index){
 playerSelectionBtn.addEventListener('click',function(e){
    // getting clicked button by attribute. we can use other methods as well
   const clickedBtn = this.getAttribute("title");
   const getComputerSelection = computerSelectionBtns[Math.floor(Math.random()*3)].getAttribute("title");

   if( clickedBtn === "Rock" && getComputerSelection === "Rock"){
       alert("tie");
   } else if (clickedBtn === "Rock" && getComputerSelection === "Paper") {
      alert("Computer Wins!");
   } else if (clickedBtn === "Rock" && getComputerSelection === "Scissor") {
     alert("You Win!!");
   }

    if( clickedBtn === "Paper" && getComputerSelection === "Rock"){
        alert("You Win");
    } else if (clickedBtn === "Paper" && getComputerSelection === "Paper") {
         alert("Tie");
    } else if (clickedBtn === "Paper" && getComputerSelection === "Scissor") {
        alert("Computer Win");
    }
  

    if( clickedBtn === "Scissor" && getComputerSelection === "Rock"){
        alert("You Win");
    } else if (clickedBtn === "Scissor" && getComputerSelection === "Paper") {
         alert("Tie");
    } else if (clickedBtn === "Scissor" && getComputerSelection === "Scissor") {
        alert("Computer Win");
    }
   
 });
});





