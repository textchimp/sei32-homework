// Homework: The Word Guesser
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


const secretWord = [ 'L', 'E', 'A', 'F'];
const guessedLetters = [ '_', '_', '_', '_'];

const guessLetter = function(guessLetter) {

let foundMatch = false;     //must be declared above the for loop, outside

    // Check if the user's guess appears as any of the letters in the secret word

  for ( let i = 0; i < secretWord.length; i++ ){
    // Check console.log( secretWord[i]) - JS Console guessLetter('x')

    const secretLetter = secretWord[i];   // Store current letter from the array into a convenience variable
    if (secretLetter === guessLetter ){
      console.log( `Correct guess! ${secretLetter} at index ${i}`);
      // Replace the underscore at the found position, with the correct guess:
      guessedLetters[i] = guessLetter;
      foundMatch = true;
    }

  } // end for

  if( !foundMatch ){    // foundMatch === false - tested after the loop
    console.log(`Sorry, no matches for ${ guessLetter }`);
  }

  console.log(`Guessed letters ${ guessedLetters}`);

}; // end of guessLetter()





// False negatives
//   } else {
//     console.log('No match!');
//
