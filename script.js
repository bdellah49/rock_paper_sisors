const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const playerSelect = document.querySelector("#playerSelection");
const computerSelect = document.querySelector("#computerSelection");
const playerImg=document.createElement('img');
const computerImg=document.createElement('img');
const result =document.querySelector('#result');
const hintPlay=document.querySelector(".hintPlay");
const hintComp=document.querySelector(".hintComp");
window.setTimeout(function() {
    playerSelect.removeChild(hintPlay);
    computerSelect.removeChild(hintComp);
    },700);
    
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
    switch(playerSelection){
        case "rock":
            switch (computerSelection){
                case "rock": return "TABLE" ;break;
                case "scissors": return "you WON ! rock beats scissors"; break;
                case "paper": return "you LOSE !  paper beats rock";break;
            }
        case "paper":
            switch (computerSelection){
                case "paper": return "TABLE"; break;
                case "rock": return "you WON ! , paper beats rock"; break;
                case "scissors": return "you LOSE ! , scissors beats paper";break;
            }    
        case "scissors": 
            switch (computerSelection){
                case "scissors": return "TABLE";break;
                case "paper": return "you WON ! , scissors beats paper"; break;
                case "rock": return "you LOSE ! , rock beats scissors";break;
            }
    }

}
const choices=["rock","paper","scissors"];
let playerSelection;
let computerSelection;
