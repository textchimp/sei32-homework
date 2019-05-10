
//
console.log('The Word Guesser')
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
//

const hiddenWord = [`F`, `O`, `X`];
let guessWord = [`_`, `_`, `_`];



let guessLetter = function(letter) {
  for (let i = 0; i < hiddenWord.length; i++) {
    if (letter === hiddenWord[i]) {
      guessWord[i] = hiddenWord[i];
      console.log(`Congrats you found a letter`);

    // } else if (letter === hiddenWord[1]) {
    //   guessWord[1] = letter;
    //   console.log(`Congrats you found a letter!`);
    //   console.log(hiddenWord[1]);
    // } else if (letter === hiddenWord[2]) {
    //   guessWord[2] = letter;
    //   console.log(`Congrats you found a letter!`);
    //   console.log(hiddenWord[2]);
    // }
  //} if ( (letter === hiddenWord[0]) || (letter === hiddenWord[1]) || (letter === hiddenWord[1]) ) {
    //console.log(`Congrats you found a letter!`)
  }
}
};



// let rewardAmount = 1;
// let prize = Math.floor((Math.random() * 100) + 1);
//
//
// let calcRewardAmount = function(letter){
//   if (letter === hiddenWord[i]) {
//     rewardAmount += prize;
//   } else {
//     rewardAmount -= prize;
//   }
//   console.log(`$${rewardAmount}`);
// };

// you are are working on this
let rewardAmount = 0;
// let prize = Math.floor((Math.random() * 100) + 1);
let prize = 10;


let calcRewardAmount = function(letter){
  //let found = false;
  for (let i = 0; i < hiddenWord.length; i++) {
    if (letter === hiddenWord[i]) {
    rewardAmount += prize;
    //  found = true;
  } else {
    rewardAmount += prize;
  }
};


let printAnswer = function(letter){
  guessLetter(letter);
  console.log(guessWord);
  calcRewardAmount(letter);
  console.log(rewardAmount);
  if (guessWord.includes(`_`)) {
    console.log(`Keep guessing.`);
  } else {
    console.log(`Congrats, you win the game!`);
  }
};

printAnswer(`O`);
printAnswer(`F`);
printAnswer(`G`);
printAnswer(`X`);

//
const secretWord = ['P', 'E', 'P', 'P', 'E', 'R'];
const guessedLetters = ['_', '_', '_', '_', '_', '_'];

const guessLetter = function(guessLetter){

let foundMatch = false; //keep track of whether there were ANY matches or not

// Check if the user's guess appears as any of the letters in the secret word
for (let i = 0; i < secretWord.length; i++){

  const secretLetter = secretWord[i]; //store the current letter from the array into a convenience variablr

  if ( secretLetter === guessLetter) {
    console.log(`Correct guess ${secretLetter} at index ${i}`);
    guessedLetters[i] = guessLetter;
    foundMatch = true;
  }
} // end for

if (!foundMatch) { //foundMatch === false
  console.log(`Sorry no matches for ${ guessLetter}`);
}

  console.log(`Guessed Letters: ${ guessedLetters }`);
};



//what about different lengths

//Josh answers





//Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



//if guessLetter x number of hidden letters
// then

// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
//
//Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.



const sergeResponse = function(yourInput){
  if (yourInput.includes(`?`)) {
    console.log(`Sure`);
  } else if (yourInput === yourInput.toUpperCase()){
    console.log(`Woah, chill out!`);
  } else if (yourInput === ``){
    console.log(`Fine be that way`);
  } else {
    console.log(`Whatever`)
  }
};


sergeResponse("HI SERGE");
sergeResponse("What is your name?");
sergeResponse(``);
sergeResponse(`goodbye`);

const sergeSays = function( input ){
  let response = '';
  //if  (input [input.length - 1] === `?`){
    if( input.endsWith(`?`) ){
      response = 'sure.';
    } else if ( input.length === 0 ) {
      response = `Fine, be that way`;
    } else if ( input === input.toUpperCase() ) {
      response = `Whoa chill out`;
    } else {
      response = `whatever`;
    }
//???

  return response;
};

console.log('Hello:', sergeSays(`Hello`));
console.log('How are ?', sergeSays(`How are you?`));
console.log('', sergeSays(``));
console.log('WHY', sergeSays(`WHY`));
