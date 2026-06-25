function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getPlayerGuess() {
  const input = prompt("Enter a number between 1 and 100");
  if (input === null) {
    console.log("Input cancelled");
    return false;
  }
  const trimmed = input.trim();
  if (trimmed === "") {
    console.log("You must enter a number");
    return false;
  }
  const num = parseInt(trimmed, 10);
  if (isNaN(num)) {
    console.log("You must enter a valid number");
    return false;
  }
  if (num < 1 || num > 100) {
    console.log("Number must be between 1 and 100");
    return false;
  }
  return num;
}

function checkGuess(secretNumber) {
  const guess = getPlayerGuess();
  if (guess === false) return false;
  
  if (guess === secretNumber) {
    console.log("You win..   You seem pretty intelligent and good!!");
    return true;
  }
  if (guess < secretNumber) {
    console.log("Your guess is too low, try again");
    return false;
  }
  else {
    console.log("Your guess is too high, try again");
    return false;
  }
}

function reactionEmojis(emoji, count = 30){
  let spawned = 0;
  const spawnInterval = setInterval(() => {
    if (spawned >= count) {
      clearInterval(spawnInterval);
      return;
    }
    const confetti = document.createElement("div");
    confetti.textContent = emoji;
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "2rem";

    document.body.appendChild(confetti);

    let y = -20;
    const fall = setInterval(() => {
      y += 5;
      confetti.style.top = y + "px";  

      if (y > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
  }, 20);
  }, 200);
}

function game() {

  //Test experiment to check the random number
  const randomNum = generateRandomNumber(1, 100);
  //console.log("The random number is " + randomNum);
  let counter = 0;
  let win = false;
  while (!win && counter < 10) {
    const result = checkGuess(randomNum);
    counter++;
    if (result) win = true;
  }
  if (win) {
    console.log("You made " + counter + " guesses");
    reactionEmojis("💯🎊🎉✨🔥");
    console.log('The random number was ' + randomNum);
  } else {
    console.log("You lose");
     reactionEmojis('😭💔😔☹️🥲')
    console.log("The random number was " + randomNum);
    console.log(
      "YOU HAVE EXITED THE NUMBER OF AVAILABLE GUESSES, BETTER LUCK NEXT TIME",
    );
  }
  if (win == true && counter <= 3) {
    console.log("You have 10 points.");
  } else if (win === true && counter >= 4 && counter <= 6) {
    console.log("You have 6 points.");
  } else if (win === true && counter >= 7 && counter <= 10) {
    console.log("You have 3 points.");
  } else {
    console.log("You failed!!! You are a very poor guesser with 0 points.");
  }
}


game();
