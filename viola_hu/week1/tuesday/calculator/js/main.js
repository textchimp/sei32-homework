console.log("Day02 Homework");
//
// The Calculator
// Part 1
console.log("The Calculator - Part 1");

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log(`1) Square Number`);

const squareNumber = function(initNum) {
  const squaredNum = initNum ** 2;
  console.log(`The result of squaring the number ${initNum} is ${squaredNum}.`);
  return squaredNum;
}
console.log(squareNumber(5));



// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
console.log(`2) Half Number`);

const halfNumber = function(initNum) {
  const halfedNum = initNum / 2;
  console.log(`Half of ${initNum} is ${halfedNum}.`);
  return halfedNum;
}
console.log(halfNumber(5));



// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
console.log(`3) Percentage`);

const percentOf = function(num01, num02) {
  const percent = (num01 / num02 * 100).toFixed(2) + '%';
  console.log(`${num01} is ${percent} of ${num02}.`);
  return percent;
}
console.log(percentOf(1,2));



// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
console.log(`4) Area`);

const areaOfCircle = function(radius) {
  const area = (Math.PI * radius ** 2).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}
console.log(areaOfCircle(2));

// Bonus: Round the result so there are only two digits after the decimal.





// Part 2
console.log("The Calculator - Part 2");

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
console.log(`5) Mixed Calculation`);

const mixCalculation = function(initNum) {
  const halfedNum = initNum / 2;
  const squaredNum = halfedNum ** 2;
  const area = (Math.PI * squaredNum ** 2).toFixed(2);
  const percent = (area / squaredNum * 100).toFixed(2) + '%';
  return percent;
}
console.log(mixCalculation(4));


// Strings
console.log(`String Exercises`);
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
console.log(`1) DrEvil `);
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(initialAmout) {
  if (initialAmout === 1000000) {
    return `${initialAmout} dollars (pinky)`;
  } else {
    return `${initialAmout} dollars`
  }
};
console.log(drEvil(100));
console.log(drEvil(1000000));


// MixUp
console.log(`2) MixUp`);
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(string01, string02) {
  const newString01 = string02.slice(0,2) + string01.slice(2,string01.length);
  const newString02 = string01.slice(0,2) + string02.slice(2,string02.length);
  console.log(`mixUp('${string01}', '${string02}'): '${newString01} ${newString02}'`);
}

mixUp("apple", "banana");


// FixStart
console.log(`3) FixStart`);
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le

const fixStart = function(initString) {
  const firstCharacter = initString.slice(0,1);
  const exceptFirstCharacter = initString.slice(1);

  const newString = exceptFirstCharacter.replace(/firstCharacter/gi, "*");
  console.log(newString);
}

fixStart("bubble");



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(string) {
  if (string.length >= 3 && string.slice([string.length-3]) === "ing"){
    return string + "ly";
  } else if(string.length >= 3){
    return string + "ing";
  } else {
    return string;
  }
};

console.log(verbing("playing"));
console.log(verbing("play"));
console.log(verbing("eat"));

// Not Bad
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


const notBad(string) {
  if(string.includes('not') && string.includes('bad') && )
}
