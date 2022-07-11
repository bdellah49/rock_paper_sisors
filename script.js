const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const playerSelect = document.querySelector("#playerSelection");
const computerSelect = document.querySelector("#computerSelection");
const playerImg=document.createElement('img');
const computerImg=document.createElement('img');
const result =document.querySelector('#result');
rock.addEventListener("click",function(){
    playerSelection="rock";
    playerImg.setAttribute("src","./images/rock.png");
    playerSelect.appendChild(playerImg)
    result.textContent=playRound(); 
    }
)
paper.addEventListener("click",function(){
    playerSelection="paper";
    playerImg.setAttribute("src","./images/paper.jpeg");
    playerSelect.appendChild(playerImg);
    result.textContent=playRound(); 
    }
)
scissors.addEventListener("click",function(){
    playerSelection="scissors";
    playerImg.setAttribute("src","./images/scissors.png");
    playerSelect.appendChild(playerImg)
    result.textContent=playRound(); 
    }
)
function computerPlay(){
    return choices[Math.floor(Math.random()*3)];
}
function playRound(){
computerSelection=computerPlay();
switch (computerSelection){
    case "rock":
        computerImg.setAttribute("src","./images/rock.png");
        computerSelect.appendChild(computerImg);
        break;
    case "paper":    
        computerImg.setAttribute("src","./images/paper.jpeg");
        computerSelect.appendChild(computerImg);
        break;
    case "scissors":
        computerImg.setAttribute("src","./images/scissors.png");
        computerSelect.appendChild(computerImg);
        break;
}
if (choices.includes(playerSelection)){
    switch(playerSelection){
        case "rock":
            switch (computerSelection){
                case "rock": return "table" ;break;
                case "scissors": return "you won , rock beats scissors"; break;
                case "paper": return "you lose , paper beats rock";break;
        }
        case "paper":
            switch (computerSelection){
                case "paper": return "table"; break;
                case "rock": return "you won , paper beats rock"; break;
                case "scissors": return "you lose , scissors beats paper";break;
            }    
        case "scissors": 
            switch (computerSelection){
                case "scissors": return "table";break;
                case "paper": return "you won , scissors beats paper"; break;
                case "rock": return "you lose , rock beats scissors";break;
            }
    }
}else{
    playRound();
}

}
const choices=["rock","paper","scissors"];
let playerSelection;
let computerSelection;
