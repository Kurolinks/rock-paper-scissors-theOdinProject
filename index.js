let humanScore = 0;
let computerScore = 0;


// select container div, create nerw div and set attributes
const container = document.querySelector(".container");
const newDiv = document.createElement("div");
newDiv.setAttribute('style', 'border: black solid; background-color: blue;');




// create 3 buttons and set contents and id and attributes
const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.setAttribute('style', 'height: 40px; width: 100px');
rock.setAttribute('id', 'rock');


const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.setAttribute('style', 'height: 40px; width: 100px');
paper.setAttribute('id', 'paper');


const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.setAttribute('style', 'height: 40px; width: 100px;');
scissors.setAttribute('id', 'scissors');




// add buttons and new div to the DOM
newDiv.appendChild(rock);
newDiv.appendChild(paper);
newDiv.appendChild(scissors);
container.appendChild(newDiv);


// select the butttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");




// create new div to show results and add to the DOM
const resultDiv = document.createElement('div');
resultDiv.setAttribute('style', 'border: black solid', 'background-color: ash;')
resultDiv.style.height = "100px";
resultDiv.style.width = "300px";


newDiv.appendChild(resultDiv);


// rock paper scissors functionality
function playGame(choice){
       
        function getComputerChoice(){
            let computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice === 0){
                var computer = "rock"
            }
            else if (computerChoice === 1){
                var computer = "paper";
            }
            else {
                var computer = "scissors";
            }
            return(computer)
        }
        var computerChoice = getComputerChoice();
       
        function getHumanChoice(){
            var human = choice;
            return(human);
        }
   
        var humanChoice = getHumanChoice();
        console.log(humanChoice.toUpperCase(), " VS ", computerChoice.toUpperCase(),);


        // function to play game
        function playRound(humanChoice, computerChoice){
            if (humanScore < 5 && computerScore < 5) {
                var result = "";


                if (humanChoice == computerChoice){
                    result = "This is a tie";
                }
                else if (humanChoice == "paper"){
                    if (computerChoice == "rock"){
                        result = "Paper covers Rock, You Win!";
                        humanScore += 1;
                    }
                    else if (computerChoice == "scissors"){
                        result = "Scissors cuts Paper, You Lose!";
                        computerScore += 1;
                    }
                }
           
                else if (humanChoice == "rock"){
                    if (computerChoice == "paper"){
                        result = "Paper Covers Rock, You Lose!";
                        computerScore += 1;
                    }
                    else if (computerChoice == "scissors"){
                        result = "Rock smashes Scissors, You Win!";
                        humanScore += 1;
                    }
                }
           
                else if (humanChoice == "scissors"){
                    if (computerChoice == "paper"){
                        result = "Scissots cuts Paper, You Win!";
                        humanScore += 1;
                    }
                    else if (computerChoice == "rock"){
                        result = "Rock smashes Scissors, You Lose!";
                        computerScore += 1;
                    }
                }


                else {
                    result = "Ypu picked a wrong value, you lose!";
                    computerScore += 1;
                }
                return("Computer picks: " + computerChoice + " " + result + " Your Score is: " + humanScore +  " Computer Score is: " + computerScore);
            }
            else {
                if (computerScore > humanScore) {
                    return("Game Over! Your Score is: " + humanScore + " Computer scores " + computerScore + " You Lose!");
                }
                else {
                    return("Game Over! Your Score is: " + humanScore + " Computer scores " + computerScore + " You Win!");
                }
            }
        }
       
       
        // stillPlay += 1;


        function displayResult(){
            resultDiv.textContent = playRound(humanChoice, computerChoice);;
            const newResult = resultDiv.textContent;
            return(newResult);
        };
       
        displayResult();
   
};


// create function to use with event listener
function playRock() {
    playGame("rock");
}
function playPaper() {
    playGame("paper");
}
function playScissors() {
    playGame("scissors");
}
const button = document.getElementById('myButton');


// Attach event listeners to the buttons
rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);
