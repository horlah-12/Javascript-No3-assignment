 alert ('You can open the console by pressing Ctrl + Shift + K to open the Web Console directly and also quit the game.');


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
   if(num == 0){
        console.log("ROCK");
        return "ROCK";
    }
    else if(num == 1){
       console.log("PAPER");
       return "PAPER";
    }
    else{
       console.log("SCISSORS");
       return "SCISSORS";
    }
   }
//computerPlay();

function playerPlay(){
    let input = prompt("ROCK, PAPER, or SCISSORS?");
    let playerSelection = input.toUpperCase();
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return("You win! Rock crushes scissors.");
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return("You lose! Paper covers rock.");
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return("You lose! Scissors cuts paper.");
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return("You lose! Rock crushes scissors.");
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        return("You win! Paper covers rock.");
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return("You win! Scissors cuts paper.");
    }
    else if(playerSelection == computerSelection){
        return("Thats a tie... Try again.");
    }
}

//playRound();


function game(){
    let win = 0;
    let loss = 0;
    let tie = 0;
 
    for(let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        let result = playRound(playerSelection);
        console.log(result);
    
        if(result.includes("win")){
            win++;
        }
        else if(result.includes("lose")){
            loss++;
        }
        else if(result.includes("tie")){
            tie++;
        }
    }
    console.log("YOU WON " + win + " times.");
    console.log("YOU LOST " + loss + " times.");
    console.log("YOU TIED " + tie + " times.");

       if (win > loss){
        console.log("You won the game!");
    }

    if (win === loss || (win === tie && win > loss)){
        console.log("You tied the game!");
    }
}
 
game();

