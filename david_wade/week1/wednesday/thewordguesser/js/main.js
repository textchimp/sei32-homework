// You'll create a simple word guessing game where the user gets infinite tries to guess the word
//(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to
//hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// const secretWord = ['F', 'O', 'X'];
// const guessed = ['_', '_', '_'];
//
// const guessedLetter = function() {
//   for (i = 0; i < secretWord.length; i++) {
//     console.log(secretWord[i]);
//   }
//     if guessedLetter() === secretWord {
//       console.log("yay");
//     }
// }

//This is all Ive got.....


// const secretWord = ['P', 'E', 'P', 'P', 'E', 'R'];
// const guessedLetters = ['_', '_', '_', '_' '_', '_'];
//
// const guessLetter = function( guessLetter ) {
//
//
// for ( let i = 0; i < secretWord.length; i++) {
//
//   const secretLetter = secretWord[i];
//
//   if( secretLetter === guessLetter ) {
//
//   }
// }
//
//
//
// }

//
// const seceretWord = [ 'F', 'O', 'X' ];
//
// const guessWord = [ 'F', '_', '_' ];
//
//
// const guessedLetter = function(){
//   for ( i = 0; i < guessWord.length; i++) {
//     console.log(guessedLetter[i]);
//   };
//
// };//end of guessedLetter()


// const secretWord =     ['P', 'E', 'P', 'P', 'E', 'R'];
// const guessedLetters = ['_', '_', '_', '_', '_', '_'];
//
// const guessLetter = function( guessLetter ){
//
//   let foundMatch = false;  // Keep track of whether there were *any* matches or not
//
//   // Check if the user's guess appears as any of the letters in the secret word
//   for( let i = 0; i < secretWord.length; i++ ){
//
//     const secretLetter = secretWord[i]; // store the current letter from the array into a convenience variable
//
//     if( secretLetter === guessLetter ){
//       console.log(`Correct guess! ${ secretLetter } at index ${ i }`);
//       // Replace the underscore at the found position, with the correct guess:
//       guessedLetters[ i ] = guessLetter;
//       foundMatch = true;
//     }
//
//   } // end for
//
//   if( !foundMatch ){   // foundMatch === false
//     console.log(`Sorry, no matches for ${ guessLetter }`);
//   }
//
//   console.log(`Guessed letters: ${ guessedLetters }`);
//
// }; // end of guessLetter()


// const secretWord = [ 'F', 'O', 'X' ];
//
// const guessLetters = [ '_', '_', '_' ];
//
// const guessedLetter = function(guessedLetter){
//
//   let foundMatch = false;
//
//     for ( i = 0; i < secretWord.length; i++){
//
//     if ( secretWord === guessedLetters ) {
//       console.log(`correct guess ${ secretLetter } at index ${ i }`);
//       secretWord[ i ] = guessLetters;
//       foundMatch = true;
//
//     } //end if statement
//     }//end of for looop
//     if( !foundMatch ){ foundMatch === false
//      console.log(`sorry no matches for ${ guessedLetters }`);
//   };
//
//
// };//end of guessedLetter()


const secretWord = [ 'F', 'O', 'X' ];

const guessLetters = [ '_', '_', '_' ];
