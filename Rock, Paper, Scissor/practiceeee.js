function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0){
        return 'rock';
    }
    else if (randomNumber == 1){
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection){
        return 'Draw';
    }
    else if (playerSelection.toLowerCase() == 'rock'){
        if (computerSelection == 'paper'){
            return "Computer wins";
        }
        else {
            return "Player wins";
        }
    }
    else if (playerSelection.toLowerCase() == 'paper'){
        if (computerSelection == 'rock'){
            return "Player wins";
        }
        else {
            return "Computer wins";
        }
    }
    else if (playerSelection.toLowerCase() == 'scissor'){
        if (computerSelection == 'rock'){
            return "Computer wins";
        }
        else {
            return "Player wins";
        }
    }
}

function game(playRound){
    playerscore = 0;
    compscore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice: rock, paper or scissor: ");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        alert(result);
        if (result == "Player wins"){
            playerscore++;
        }
        else if(result == "Computer wins"){
            compscore++;
        }
    }
    if (playerscore > compscore){
        alert("Player wins the game");
    }
    else if (playerscore < compscore){
        alert("Computer wins the game");
    }
    else{
        alert("Draw");
    }
    return score;
}

computerPlay();
playRound();
game(playRound);
