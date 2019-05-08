console.log('The Calculator: Part 1');

// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const calcSquareNumber = function (x) {
  return x**2;
};

const squareNumber = calcSquareNumber(3);
console.log(`The result of squaring number 3 is ${squareNumber}.`);

// //or is this syntax better?
//
// const squareNumberAlt = function (x) {
//   const squareNumberResult = x**2;
// //is return squareNumberResult necessary?
//   return `The result of squaring number ${x} is ${squareNumberResult}.`;
// };
//
// const squareNumber2 = squareNumberAlt(2);
//
// console.log(squareNumber2);

//next function

const calcHalfNumber = function (x) {
  return x/2;
};

const halfNumber1 = calcHalfNumber(5);

console.log(`Half of 5 is ${halfNumber1}.`);

//next function

const calcPercentOf = function(x, y){
  return x/y*100;
};

const percentOf1 = calcPercentOf(2, 4);
console.log(`2 is ${percentOf1}﹪ of 4.`);

// next function

const calcAreaOfCircle = function(r){
  return Math.PI*r**2;
};

const areaOfCircle1 = calcAreaOfCircle(2);
console.log(`The area of a circle with radius 2 is ${areaOfCircle1.toFixed(2)}`);
//Bonus: Round the result so there are only two digits after the decimal.

console.log('The Calculator: Part 2');
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calcAllFunctions = function(x){
  const halfNumberLocal = calcHalfNumber(x);
  const squareNumberLocal = calcSquareNumber(halfNumberLocal);
  const areaOfCircleLocal = calcAreaOfCircle(squareNumberLocal);
  const percentOfLocal = calcPercentOf(areaOfCircleLocal, squareNumberLocal);
  return percentOfLocal;
};

const allFunctions1 = calcAllFunctions(2);
console.log(`${allFunctions1.toFixed(1)}﹪`);

// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log(`DrEvil`);

const drEvil = function(amount){
  if (amount === 1000000){
    return `${amount} dollars (pinky)`
  } else {
  return `${amount} dollars`;
  }
};

const amount1 = drEvil(1000000);
console.log(amount1);

const amount2 = drEvil(10);
console.log(amount2);

const amount3 = drEvil(1);
console.log(amount3);


// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(firstWord, secondWord){
     console.log(`${firstWord.slice(0, 2)}${secondWord.slice(2)} ${secondWord.slice(0, 2)}${firstWord.slice(2)}`);
};

mixUp('dog','dinner');
mixUp('mix', 'pod');



//FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


// If Then homeworl
// What number's bigger?
//
// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number
console.log(`What number is bigger?`);

const numOne = 5;
const numTwo = 7;

if (numOne === numTwo){
  console.log(`These numbers are equal`);
} else if (numOne > numTwo) {
  console.log(numOne);
} else {
  console.log(numTwo);
};



// The World Translator
//
// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)
//

console.log(`The World Translator`);
const language = `Spanish`;

if (language === `English`) {
  console.log(`Hello World`);
} else if (language === `French`) {
  console.log(`Bonjour fromage`);
} else {console.log(`Not yet programmed for ${language}`)
};

// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results

console.log(`The Grade Assigner`);

const score = 20;

if (score >= 90){
  console.log(`Grade: A`);
} else if (score >= 80) {
  console.log(`Grade: B`);
} else if (score >= 70) {
  console.log(`Grade: C`);
} else if (score >= 60) {
  console.log(`Grade: D`);
} else {
  console.log(`Grade: F`);
};


//
// The Pluralizer
//
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!


console.log(`The Pluralizer`);

const num = 0;
const noun = `cat`;

if (num === 1){
  console.log(`${num} ${noun}`);
} else if (num > 1) {
  console.log(`${num} ${noun}s`);
} else {
  console.log(`No ${noun}s`);
};


//
// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
//
const rainNum = 28;

if( rainNum % 3 === 0 && rainNum % 5 === 0 && rainNum % 7 ===0 ){
} else if( rainNum % 3 === 0 && rainNum % 5 === 0 ){
  console.log("PlingPlang");
} else if( rainNum % 5 === 0 && rainNum % 7 === 0 ){
  console.log("PlangPlong");
} else if( rainNum % 3 === 0 && rainNum % 7 === 0 ){
  console.log("PlingPlong");
} else if( rainNum % 3 === 0 ){
  console.log("Pling");
} else if( rainNum % 5 === 0 ) {
  console.log("Plang");
} else if( rainNum % 7 === 0 ){
  console.log("Plong");
} else{
  console.log(rainNum);
};

//Solution

const number = 105;

    let output = ''; // initialising our output variable to be an empty string

    if(number % 3 === 0){
      output = output + "Pling";
      //output += "Pling"
    };

    if(number % 5 === 0){
      output += "Plang";
    };

    if(number % 7 === 0){
      output += "Plong";
    };

    if( output.length === 0){
      //if output is still empty, that means none of 3, 5, or 7 were factors
      //so set the contents to original number
      output = number
    }



console.log('The result is', output);

// Solution with function


const raindrop = function(number){
    let output = ''; // initialising our output variable to be an empty string

    if(number % 3 === 0){
      output = output + "Pling";
      //output += "Pling"
    };

    if(number % 5 === 0){
      output += "Plang";
    };

    if(number % 7 === 0){
      output += "Plong";
    };

    if( output.length === 0){
      //if output is still empty, that means none of 3, 5, or 7 were factors
      //so set the contents to original number
      output = number
    }
  return output
};

console.log(`Raindrops for 28`, raindrop(28) );

// yet another solution

const isAFactor = function( num, divisor){
  return num % divisor === 0;
}

const raindrop2 = function(number){
    let output = ''; // initialising our output variable to be an empty string

    if( isAFactor(number, 3) ){
      output = output + "Pling";
      //output += "Pling"
    };

    if( isAFactor(number, 5) ){
      output += "Plang";
    };

    if( isAFactor(number, 7) ){
      output += "Plong";
    };

    if( output.length === 0){
      //if output is still empty, that means none of 3, 5, or 7 were factors
      //so set the contents to original number
      output = number
    }
  return output
};

console.log(`Raindrops for 28`, raindrop2(28));
