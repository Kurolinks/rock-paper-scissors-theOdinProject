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
console.log(computerChoice);
console.log(human);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("This is a tie");
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You Win!");
            humanScore += 1;
        }
        else if (computerChoice == "scissors"){
            console.log("You Lose!");
            computerScore += 1;
        }
    }
        
    else if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You Lose!");
            computerScore += 1;
        }
        else if (computerChoice == "scissors"){
            console.log("You Win!");
            humanScore += 1;
        }
    }

    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log("You Win!");
            humanScore += 1;
        }
        else if (computerChoice == "rock"){
            console.log("You Lose!");
            computerScore += 1;
        }
    }
    
    console.log(humanScore);
    console.log(computerScore);

}

playRound(human, computerChoice);

function playRound();