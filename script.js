function computerPlay(){
    return choices[Math.floor(Math.random()*3)];
}
function playRound(){
let computerSelection=computerPlay();
let playerSelection = window.prompt("what's your choice?").toLowerCase();
if (choices.includes(playerSelection)){
    switch(playerSelection){
        case "rock":
            switch (computerSelection){
                case "rock": return playRound(); break;
                case "scissors": return "you won , rock beats scissors"; break;
                case "paper": return "you lose , paper beats rock";break;
        }
        case "paper":
            switch (computerSelection){
                case "paper": return playRound(); break;
                case "rock": return "you won , paper beats rock"; break;
                case "scissors": return "you lose , scissors beats paper";break;
            }    
        case "scissors": 
            switch (computerSelection){
                case "scissors": return playRound(); break;
                case "paper": return "you won , scissors beats paper"; break;
                case "rock": return "you lose , rock beats scissors";break;
            }
    }
}else{
    playRound();
}
}
function Game(){   
    let winnings=0;
    let key = "won";
    for (let i=0;i<5;i++){
            playRound();       
            let result= playRound();
            if (result.split(' ').includes(key)){
                winnings++;    
            }else{
                winnings--;
            }
            console.log(result);   
}
    if (winnings>2){
            return "you won the game";
            }else{
            return "you've lost the game"
            }
}
const choices=["rock","paper","scissors"];
console.log(Game());
