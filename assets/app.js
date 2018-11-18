console.log("connected!");

//initialize variables and arrays for the game
let userInput = "";
let winsCounter = 0;
let lossesCounter = 0;
let guessCounter = 13;
let incorrectLetters = [];
let wordBank = ["Spongebob", "Dexter", "Tommy", "Rocko", "Chucky", "Beavis", "Doug", "Bubbles", "Angelica", "Norbert", "Marge", "Jimmy", "Arthur", "Squidward", "Homer", "Bart", "Catdog", "Vegeta", "Bender"];

function resetGame () {

    if (guessCounter > 0 && gameWord === underscoreWord) {
        console.log("Congrats! You won!");
        guessCounter = 13;
        incorrectLetters = [];
    } else if (guessCounter = 0) {
        lossesCounter++;
        console.log("You've hit the maximum number of guess. Try again!");
        guessCounter = 13;
        incorrectLetters = [];
    }
    
}



    let randomWord = Math.floor((Math.random() * 19) + 0);
    let gameWord = wordBank[randomWord].toLowerCase();

    let gameWordArr = gameWord.split("");
    console.log(gameWordArr);
    let underscoreWord = gameWord.replace(/[a-z]/g, '-');
    console.log(underscoreWord);

    let underScoreArr = underscoreWord.split("");
    console.log(underScoreArr);
    





//onkeyup function to record the user's guess

document.onkeyup = function(event) {
    
          var userInput = event.key;
          console.log(userInput);

          // loop through each character in the array of the cartoon characters.
          // check to see if the userInput (letter) is in the array
          //if the user input is in the array, replace the dash(es) with the userInput
          //if the user input is not in the word array, push the letter to the empty array
          //decrement the guessCounter

          for (var i = 0; i < gameWordArr.length; i++) {
            if (gameWordArr.includes(userInput)) {
                console.log("I am in the word.");
                var newWord = gameWordArr.replace("-", userInput);
                console.log(newWord);
            }
                else {
                    incorrectLetters.push(userInput[i]);
                    console.log(incorrectLetters);
                    guessCounter--;
                    console.log(guessCounter);
                }


                //need a .join method to form a string to write to the screen at the end
            }
          }


          //Using the DOM to adjust for the wins, losses, letters already guessed, current word 

          let newWins = document.getElementById("#wins");
          let newLosses = document.getElementById("#losses");
          let newUnderscores = document.getElementById("#underscores");
          let newNumGuesses = document.getElementById("#numGuesses");
          let newGuessedLetters = document.getElementById("#guessedLetters");

          newWins.createElement("p");


          newWins.textContent = "Wins: " + winsCounter;
          newLosses.textContent = "Losses: " + lossesCounter;

          newWins.appendChild(winText);
          newLosses.appendChild(lossesText);
          

          span = document.getElementById("myspan");
          txt = document.createTextNode("your cool text");
          span.appendChild(txt);


          
          

//startGame function to kick off the game

//if 

//need to convert the wordBank index into underscores

//

//endGame function to reset variables and clear array of incorrectLetters
