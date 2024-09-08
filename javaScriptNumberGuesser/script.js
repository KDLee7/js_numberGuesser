let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10);
}


function compareGuesses(human, computer, target){
    if (human === target || human === computer ){
        return true;
    }
    else if (computer === target){
        return false;
    }
}


function updateScore(winner){
    if (winner === 'human'){
        humanScore +=1;
    }
    else if (winner === 'computer'){
        computerScore +=1;
    }
}


function advanceRound(){
    return currentRoundNumber +=1;
}
