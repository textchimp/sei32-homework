//
// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//define array
const booksRead = [
  {bookTitle:'World Atlas',
   author:'James Cook',
   alreadyRead: false,
 },
 {bookTitle:'National Geographic Final Edition',
  author:'John Doe',
  alreadyRead: true,
 },
 {bookTitle:'Coding for Dummies',
  author:'Helpme please',
  alreadyRead: false,
 }
];

//loop through array and print through everything
for (let i = 0; i < booksRead.length; i++) {
  const book = booksRead[i];
  if (book.alreadyRead){
  console.log(`You have already read ${book.bookTitle} by ${book.author}`);
  } else {
  console.log(`You still need to read ${book.bookTitle} by ${book.author}`);
  }
};

// Another way to do it
for (let i = 0; i < booksRead.length; i++) {
  const book = booksRead[i];
  let bookListing = `${book.bookTitle} by ${book.author}`;
//no need to say book.alreadyRead === true
  if (book.alreadyRead){
  console.log(`You have already read`, bookListing);
  } else {
  console.log(`You still need to read`, bookListing);
  }
};


//The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

//Create an object and place ingredients in array
const recipeCard = {
  title: `Mole`,
  servings: 2,
  ingredients: [
    `cinnamon`,
    `cumin`,
    `cocoa`,
  ]
};


// // for in loop for objects
// for(const key in recipeCard) {
// console.log(key, ':', recipeCard[key]);
// };
// //need to free ingredients from array
// const ingredientList = recipeCard.ingredients
// for (let i = 0; i < recipeCard.ingredients.length; i++){
// console.log(recipeCard.ingredients[i]);
// };


console.log( recipeCard.title);
console.log(`Serves: ${ recipeCard.servings }`);
console.log(`Ingredients:`);
for (let i = 0; i < recipeCard.ingredients.length; i++){
console.log(recipeCard.ingredients[i]);
};


// recipe.ingredients.join("/n")



// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

const favMovie =
{
  title: `Puff the Magic Dragon`,
  duration: 30,
  stars: [`Puffy`, `Puffster`, `Puff Master`],
  printInfo: function(){
    console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars.join(`,`)}`);
  }
}
//function inside above and function outside below

const printMovieInfo = function(movie){
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(`,`)}.`);
  };

printMovieInfo(favMovie);
favMovie.printInfo();


//   Geometry Function Lab
console.log(`Part 1, Rectangle`);

const rectangle = {
    length: 4,
    width: 7,
  };

// Given a rectangle object like the one below, write the following functions:
//   isSquare(rect) - Returns whether the rectangle is a square or not

//if length = width then return this is a square
const isSquare = function(rectangle){
  if (rectangle.length === rectangle. width){
    return `This is a square`;
  } else {
    return `This is a rectangle but not a square`;
  }
};

console.log(isSquare(rectangle));

//   area(rect) - Returns the area of the rectangle

// Multiply width and width to return area
const area = function(rectangle){
  return rectangle.width*rectangle.length
};

console.log(`The area of this rectangle is ${area(rectangle)}`);

//   perimeter(rect) - Returns the perimeter of the rectangle

// perimeter = 2 (lenght + width)
const perimeter = function(rectangle){
  return 2*(rectangle.length + rectangle.width)
};

console.log(`The perimeter of this rectangle is ${perimeter(rectangle)}`);

//   In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
//
console.log(`Part 2, Triangle`);

//   Given a triangle object like the one below, write the following functions:

const triangle = {
  sideA: 4,
  sideB: 6,
  sideC: 3
};
//   isEquilateral(tri) - Returns whether the triangle is equilateral or not

// are all sides equal

const isEquilateral = function(triangle){
  if( triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC ){
    return true;
  } else {
    return false;
  }
};

console.log(`Is this triangle equilateral?`, isEquilateral(triangle));

//   isIsosceles(tri) - Returns whether the triangle is isosceles or not

// 2 sides are equal but 1 side is not

const isIsosceles = function(triangle){
  if( (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) && !isEquilateral(triangle) ){
  console.log(`Yes, this is an isosceles triangle`);
  }
  else {
  console.log(`No, not an isosceles triangle`);
  }
};

isIsosceles(triangle);

//   area(tri) - Returns the area of the Triangle

//



// p = (a + b + c)/2
const calcP = function(triangle){
  return (triangle.sideA + triangle.sideB + triangle.sideC)/2
};

// Area	=	 square root of  (p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	))
const areaOfTriangle = function(triangle){
  const p = calcP(triangle);
  return Math.sqrt( p *( p - triangle.sideA ) * (p - triangle.sideB) * ( p - triangle.sideC));
};

console.log(`The area of the triangle is`, areaOfTriangle(triangle));


//   isObtuse(tri) - Returns whether the triangle is obtuse or not

// obtuse triangle has one angle > 90 and c^2 > a^2 + b^2

// NOTE: c is always the longest





const isObtuse = function(triangle){
// Must find longest side first and relabel sides A, B and C
  const arrayTriangle = Object.values(triangle);

// After object values are converted to array values (could also use a for in loop), sort values in ascending order
  const sortedArrayTriangle = arrayTriangle.sort();

// Relabel sides so that longest side is called c
  const a = sortedArrayTriangle[0];
  const b = sortedArrayTriangle[1];
  const c = sortedArrayTriangle[2];

// Use c^2 > a^2 + b^2 to determine if triangle is obtuse
  if (c**2 > (a**2 + b**2)) {
    return true
  } else {
    return false
  }
};

console.log(`Is this an obtuse triangle?`, isObtuse(triangle));

//
//   As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};




cashRegister = function(cartForParty){
  // convert object values into array
  const cartForPartyArray = Object.values(cartForParty);

  // convert string values into integer array
  // also could use a "for in" loop and parseInt()

  const cartForPartyArrayInt = cartForPartyArray.map(Number);

// Add int in array
  const reducer = (accumulator, currentValue) => accumulator + currentValue; // is this a function?
  return cartForPartyArrayInt.reduce(reducer);
};

console.log(`The total amount is $`, cashRegister(cartForParty));

// // Output
// cashRegister(cartForParty)); // 60.55

console.log(`JavaScript Bank`);

// //create an array with objects
// const bank = [
//   {fullName: 'Jane Doe',
//   currentBalance: 500,
//   printBalance: function(){
//     console.log( `Account Holder Name: ${this.fullName}, Current Balance: ${this.currentBalance}`);
//     },
//   deposit: function(){
//     currentBalance
//     },
//   },
//   {fullName: 'Matt Smith',
//   currentBalance: 500,
//   printBalance: function(){
//     console.log( `Account Holder Name: ${this.fullName}, Current Balance: ${this.currentBalance}`);
//     },
//   },
// ];

const bank = {
accounts: [
  {name: Josh, balance:500},
  {name: Bob, balance: 500}
],
addAcount: function(accountName, startingBalance),





}

bank.push


//methods outside the ob

// // print current balance in console
// bank[1].printBalance();
//
//
//
//
// // print current balance of ALL accounts in console
// for (let i = 0; i < bank.length; i++){
//   bank[i].printBalance();
// };

// method to show total balance

//method to add accounts
// https://www.w3schools.com/js/js_object_methods.asp
//


// method to deposits and withdrawls


// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4

// Except if it is evenly divisible by 100...

// Unless it is also divisible by 400

// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear

// Every year that is evenly divisible by 4
const divisibleBy4 = function( year ){
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

const notDivisibleBy100 = function( year ){
  if (year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
};

const divisibleBy400 = function( year ){
  if (year % 400){
    return true;
  } else {
    return false;
  }
};

// The test we need is "if the year is divisble by 4 AND (it's NOT divisible by 100 OR it's divisble by 400)
// A  &&  B
// B ( C || D)
// A /4
// B

// const divisibleBy4 = function( year ){
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// const notDivisibleBy100 = function( year ){
//   if (year % 100 !== 0) {
//       return true;
//     } else {
//       return false;
//     }
// };
//
// const divisibleBy400 = function( year ){
//   if (year % 400){
//     return true;
//   } else {
//     return false;
//   }
// };

// const isDivisibleBy = function(num, divisor){
//   return num % divisor === 0;
// }

const isLeapYear = function(year){

return ( divisibleBy4(year) && (notDivisibleBy100(year) || divisibleBy400(year)) )
};

//
//   //let result;
//   //if ( divisibleBy4 && (notDivisibleBy100 || divisibleBy400) ){
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   //return result;
// };
//
// console.log(`Is 1997 this a leap year`, isLeapYear(1997));
// console.log(`Is 1996 this a leap year`, isLeapYear(1996));
// console.log(`Is 1990 this a leap year`, isLeapYear(1990));
// console.log(`Is 2000 this a leap year`, isLeapYear(2000));

// this is the one that works
// const isLeapYear = function(year){
//   if( year % 4 === 0) {
//     if (year % 100 !==0 || year % 400 === 0) {
//       return true;
//   } else {
//     return false;
//   }
// } else {
//   return false;
// }
// };














// Bonus!
//
// Ask the user what number they want to test
