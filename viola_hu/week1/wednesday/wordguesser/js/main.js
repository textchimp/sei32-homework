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

const originWord = ['f','o','o','d'];
let guessWord = ['_','_','_','_'];

//Main-Function
const guessLetter = function(letter) {
  if(isAnyMatch(letter)){
    console.log(guessWord.join(""))   //first round, manually created a function -> console.log(printOutArray());
    console.log(`Congrats! You've found a new letter "${letter}".`);
    console.log(checkDone());
  } else {
    console.log("Booomm! No luck! Try again!");
  }
};

//Sub-Function
// check if the guessed letter matches any character of originWord
function isAnyMatch (guessedLetter){
  let matchNum = 0;
  for (let i = 0; i < originWord.length; i++){
    if (guessedLetter === originWord[i]){
      guessWord[i] = guessedLetter;
      matchNum++;
    }
  };
  return matchNum;
};

// //first try, manually created print out array to string
// //Sub-Function
// //When it's done iterating, it should log the current guessed letters ('F__')
// function printOutArray( ){
//   let printOut = "";
//   for (let j = 0; j < guessWord.length; j++){
//     printOut += guessWord[j];
//   };
//   return printOut;
// };

//Sub-Function
//It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
function checkDone() {
  if (guessWord.includes("_")) {
    return "Keep trying! Almost there!";
  } else {
    return `Congratulations! It is "${guessWord.join("")}".`;
  };
};


// function checkDone(){
//   let emptyNum = 0;
//   for (let k = 0; k < guessWord.length; k++){
  //   if (guessWord[k] === "_"){
  //     emptyNum++;
  //   }
  // };
//   // if (emptyNum !== 0){
//     return "Keep trying! Almost there!";
//   }
//   return `Congratulations! It is "${printOutArray()}."`;
// };


guessLetter("f");
guessLetter("o");
guessLetter("f");
guessLetter("i");
guessLetter("x");
guessLetter("d");



//
// let guessWord = ['3','1','2'];
//
// function printOutArray( ){
//   let printOut = "";
//   for (let j = 0; j < guessWord.length; j++){
//     printOut += guessWord[j];
//   };
//   return printOut;
// };








// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

const originWord = ['f','o','o','d'];
let guessWord = ['_','_','_','_'];

//Main-Function
const guessLetter = function(letter) {
  if(isAnyMatch(letter)){
    console.log(guessWord.join(""))   //first round, manually created a function -> console.log(printOutArray());
    console.log(`Congrats! You've found a new letter "${letter}".`);
    console.log(checkDone());
  } else {
    console.log("Booomm! No luck! Try again!");
  }
};

//Sub-Function
// check if the guessed letter matches any character of originWord

function isAnyMatch (guessedLetter){
  let matchNum = 0;
  for (let i = 0; i < originWord.length; i++){
    if (guessedLetter === originWord[i]){
      guessWord[i] = guessedLetter;
      matchNum++;
    }
  };
  return matchNum;
};

//Sub-Function
//It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
function checkDone() {
  if (guessWord.includes("_")) {
    return "Keep trying! Almost there!";
  } else {
    return `Congratulations! It is "${guessWord.join("")}".`;
  };
};


let matchedNumber = isAnyMatch();
let originReward = 0;
function reward() {
  const rewardRateFound = 2;
  const rewardRateWrong = -2;
  if (matchedNumber !== 0){
    let currentReward = matchedNumber * rewardRateFound;
    return currentReward;
  } else {
    currentReward = matchedNumber * rewardRateWrong;
    return currentReward;
  }
}




guessLetter("a");
guessLetter("o");
guessLetter("f");
guessLetter("i");
guessLetter("x");
guessLetter("d");

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a emptyNum (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.



//Luke

const secretWord = ['p','e','p','p','e','r'];
const guessedLetters = ['_','_','_','_','_','_'];


const guessLetter = function (guessLetter){

  let foundMatch = false;// keep track of whether there were *any* matches or not

  // check if the user's guess appears as any of the letters in the secretWord
  for (var i = 0; i < secretWord.length; i++) {

    const secretLetter = secretWord[i]; //store the current letter from the array into a convenience variable

    if (secretLetter === guessLetter) {
      console.log(`Correct guess! ${ secretLetter} at index ${i}`);
      //replace the underscore at the found position, with the correct guess:
      guessedLetters[i] = guessLetter;
      foundMatch = true;
    }

  }
  // end for loop

  if (!foundMatch) { // foundMatch === false
    console.log(`Sorry, no matches for ${guessLetter}`);
  }

  console.log(`Guess letter: ${guessedLetters.join("")}`);


}; // end of guessLetter()
guessLetter("a");
guessLetter("r");
guessLetter("p");
guessLetter("e");
