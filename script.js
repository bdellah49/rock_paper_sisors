function computerPlay(){
    return choices[Math.floor(Math.random()*3)];
}
function playRound(playerSelection,computerSelection){
computerSelection=computerPlay();
switch(playerSelection){
    case "rock":
        switch (computerSelection){
            case "rock": return playRound(playerSelection,computerSelection); break;
            case "scissors": return "you won , rock beats scissors"; break;
            case "paper": return "you lose , paper beats rock";break;
        }
    case "paper":
        switch (computerSelection){
            case "paper": return playRound(playerSelection,computerSelection); break;
            case "rock": return "you won , paper beats rock"; break;
            case "scissors": return "you lose , scissors beats paper";break;
        }    
    case "scissors": 
        switch (computerSelection){
            case "scissors": return playRound(playerSelection,computerSelection); break;
            case "paper": return "you won , scissors beats paper"; break;
            case "rock": return "you lose , rock beats scissors";break;
        }
    }
}
function Game(){   
let winner=0;
let key = "won";
for (let i=0;i<5;i++){
    computerSelection=computerPlay();
    playerSelection = window.prompt("what's your choice?").toLowerCase();
    if (choices.includes(playerSelection)){
        playRound(playerSelection,computerSelection);
        let result= playRound(playerSelection,computerSelection);
        if (result.split(' ').includes(key)){
            winner++;    
        }else{
            winner--;
        }
        console.log(result);
    }else{
        i--;
    }     
}
if (winner>0){
    return "you won the game";
    }else{
    return "you've lost the game"
    }
}
const choices=["rock","paper","scissors"];
let playerSelection,computerSelection;
console.log(Game());
