//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// WORD GUESSER

// Hard coded words
const letterOfWord = ["F", "O", "X", "F", "O", "X"];
const wordsGuessed = ['_', '_', '_', '_', '_', '_'];

// Global variables
let currentGuess = "";
let letterInQuestion = "";
let letterAppears = [];
let lettersFoundCounter = 0;


// Function checks to see if letter guessed is in the word
const guessLetter = function(guess) {

    //Array to store index positions of letter found in word
    letterAppears = [];

    // Loop checks if letter guessed is in the word
    for ( i = 0; i <= letterOfWord.length; i++) {

      // creating variable for letter in the word
      letterInQuestion = letterOfWord[i]

      // If letter guessed is in the word push the index position to array
      if ( guess === letterInQuestion) {
        letterAppears.push(i)
      }
    }

    // If we found something
    if (letterAppears.length > 0) {


      for ( i = 0; i <= letterAppears.length; i++) {

        // put the letter guessed into wordsGuessed variable at the index position saved
        numberToInsert = letterAppears[i]
        wordsGuessed[numberToInsert] = guess;
      }

      // Keeps track of how many letters we've found
      lettersFoundCounter += letterAppears.length;

      // If found all letters lets user know they've won
      if (lettersFoundCounter == letterOfWord.length) {
        return "Congratulations you won!";
        //loopCounter += 1;\
        // Else continue
      } else {
        return `Congrats! Word so far is: ${wordsGuessed.join("")}`;
      }
    }
}; // end of guessLetter function

// #### Luke's Answer

const secretWord = ["P", "E", "P", "P", "E", "R"]
const guessedLetters = ['_', '_', '_', '_', '_', '_']

const guessLetter = function( guessLetter ){
      let foundMatch = false;

  for (var i = 0; i < secretWord.length; i++) {

    const secretLetter = secretWord[i]

    if( secretLetter === guessLetter ) {
      console.log(`Correct guess! ${secretLetter} at index ${i}`);
      // Replace the underscore at the found position with the guess
      guessedLetters[i] = guessLetter;
      foundMatch = true;
    }
    if( !foundMatch ){ // if found is false
      console.log(`Sorry, no matches for ${guessLetter}`);
    }
  }
  console.log(`Guessed letters ${ guessedLetters}`);
}



/*
// Hangman edition //

// Global variables
let loopCounter = 0;
let hangmanCounter = 0;
let usedLetters = [];

while (loopCounter < 1) {
  currentGuess = prompt("What letter would you like to guess?");

  let loopResult = guessLetter(currentGuess);

  console.log(loopResult);

  loopCounter += 1;

}; // end of while loop
*/

//// Array and Function Bonus material

// Max Two
const maxOfTwo = function(num1, num2) {
  return Math.max(num1, num2);
};

// Max of Three
const maxOfThree = function(num1, num2, num3) {
  return Math.max(num1, num2, num3);
};

//Is is a vowel
const vowels = ["a", "e", "i", "o", "u"];
const isVowel = function(letter) {
  if (vowels.includes(letter)) {
    return "Is a vowel";
  } else {
    return "Not a vowel";
  }
};

//
/*
let testArray = [1, 2, 3, 4]

const arrSum = function(testArray){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}



const sumArray = function(array) {
  //return array.reduce(getSum);
};

const multiplyArray = function(array) {

};
*/
