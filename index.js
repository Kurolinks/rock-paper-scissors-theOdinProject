let humanScore = 0;
let computerScore = 0;



let stillPlay = 1;


function playGame(){
   
    while(stillPlay <= 5){
       
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
            humanChoice = prompt("Pick an option: rock, paper or scissors: ").toLowerCase();    
            return(humanChoice)
        }
   
        var human = getHumanChoice();
        console.log("Computer Picked:", computerChoice);
        console.log("You picked:", human);
       
        function playRound(humanChoice, computerChoice){
            if (humanChoice == computerChoice){
                console.log("This is a tie");
            }
            else if (humanChoice == "paper"){
                if (computerChoice == "rock"){
                    console.log("Paper covers Rock, You Win!");
                    humanScore += 1;
                }
                else if (computerChoice == "scissors"){
                    console.log("Scissors cuts Paper, You Lose!");
                    computerScore += 1;
                }
            }
       
            else if (humanChoice == "rock"){
                if (computerChoice == "paper"){
                    console.log("Paper Covers Rock, You Lose!");
                    computerScore += 1;
                }
                else if (computerChoice == "scissors"){
                    console.log("Rock smashes Scissors, You Win!");
                    humanScore += 1;
                }
            }
       
            else if (humanChoice == "scissors"){
                if (computerChoice == "paper"){
                    console.log("Scissots cuts Paper, You Win!");
                    humanScore += 1;
                }
                else if (computerChoice == "rock"){
                    console.log("Rock smashes Scissors, You Lose!");
                    computerScore += 1;
                }
            }
   
            console.log("Your Score is:", humanScore);
            console.log("Computer Score is:", computerScore);
        }
       
       
        playRound(human, computerChoice);    
        stillPlay += 1;
    }
};


playGame();

