console.log("connected!");

//initialize variables and arrays for the game
let userInput = "";
let winsCounter = 0;
let lossesCounter = 0;
let guessCounter = 13;
let incorrectLetters = [];
let wordBank = ["Spongebob", "Dexter", "Tommy", "Rocko", "Chucky", "Beavis", "Doug", "Bubbles", "Angelica", "Norbert", "Marge", "Jimmy", "Arthur", "Squidward", "Homer", "Bart", "Catdog", "Vegeta", "Bender"];
let randomWord;
let gameWord;
let underscoreWord;
let underScoreArr;
let gameWordArr;

resetGame();


function resetGame () {
    randomWord = Math.floor((Math.random() * 19) + 0);
    gameWord = wordBank[randomWord].toLowerCase();

    gameWordArr = gameWord.split("");
    
    underscoreWord = gameWord.replace(/[a-z]/g, '-');
    
    underScoreArr = underscoreWord.split("");
    guessCounter = 13;
    incorrectLetters = [];
    document.getElementById("underscores").textContent = underScoreArr.join(" ");
      
}

//onkeyup function to record the user's guess

document.onkeyup = function(event) {
    
          var userInput = event.key;
          console.log(userInput);

          // loop through each character in the array of the cartoon characters.
          // check to see if the userInput (letter) is in the array
          //if the user input is in the array, replace the dash(es) with the userInput
          //if the user input is not in the word array, push the letter to the empty array
          //decrement the guessCounter

          var boolSwitch = false;

          for (var i = 0; i < gameWordArr.length; i++) {
            if (gameWordArr[i] === (userInput)) {
                console.log("I am in the word.");
                boolSwitch = true;
                underScoreArr.splice(i, 1, userInput);
                console.log(underScoreArr);
            }
               
                //need a .join method to form a string to write to the screen at the end
          }

          if (!boolSwitch) {
              guessCounter--;
          }

          incorrectLetters.push(userInput);
          console.log(incorrectLetters);
        

          //Using the DOM to adjust for the wins, losses, letters already guessed, current word 

          document.getElementById("wins").textContent = "Wins: " + winsCounter;
          document.getElementById("losses").textContent = "Losses: " + lossesCounter;
          document.getElementById("underscores").textContent = underScoreArr.join(" ");
          document.getElementById("numGuesses");
          document.getElementById("guessedLetters");

          if (gameWord == underScoreArr.join("").toLowerCase()) {
            console.log("Congrats! You won!");
            winsCounter++;
            resetGame();
        } else if (guessCounter === 0) {
            lossesCounter++;
            console.log("You've hit the maximum number of guess. Try again!");
            resetGame();
        }

        }

        


//startGame function to kick off the game

//if 

//need to convert the wordBank index into underscores

//

//endGame function to reset variables and clear array of incorrectLetters
