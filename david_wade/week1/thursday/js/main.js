// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
//
// In other words, these functions should take as their only argument a single object
// with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

// isSquare(rect) - Returns whether the rectangle is a square or no////////////////////////////////////////////////////////////////////////////////////////////t

var rectangle = {
  height: 5,
  width: 4
};


if (rectangle.height === rectangle.width) {
  console.log('this is a square');
} else {
  console.log('this is a rectangle');
};




// area(rect) - Returns the area of the rectangle////////////////////////////////////////////////////////////////////////////////////////////


const area = function() {
let areaCalculation = (rectangle.height * rectangle.width);
return areaCalculation;
   console.log(`area is ${areaCalculation}`);
}

// perimeter(rect) - Returns the perimeter of the rectangle //////////////////////////////////////////////////////////////////////////////////////

const perimeter = function() {
let sumOfSides = (rectangle.height * 2) + (rectangle.width * 2);
return sumOfSides;
console.log('perimeter equals ', sumOfSides)
}




////////////////////////// isEquilateral(tri) - Returns whether the triangle is equilateral or not////////////////////////////////////////////////////////////////////////////////////////
///////////// isEquilateral(tri) - Returns whether the triangle is equilateral or not////////////////////////////////////////////////////////////////////

let triangle = {
  sideA: 8,
  sideB: 8,
  sideC: 8
}


let isEquilateral = function(tri){
if (tri.sideA === tri.sideB && tri.sideB === tri.sideC && tri.sideA === tri.sideC) {
  return true;

} else {
  return false;

}
};


console.log(`is triangle equilateral?' ${isEquilateral(triangle)}`);







///////////////// isIsosceles(tri) - Returns whether the triangle is isosceles or not////////////////////////////////////////////////////////////////////////


const isIsosceles = function(tri){
  if( (tri.sideA + tri.sideB) % tri.sideC || (tri.sideB + tri.sideC) % tri.sideC || (tri.sideC + tri.sideA) % tri.sideB){
  return true;
  } else {
    return false;
  }
};

console.log(`is this triangle isosceles? ${isIsosceles(triangle)}`);




////// area(tri) - Returns the area of the Triangle////////////////////////////////////////////////////////////////////////////////////////////////////////////


const triangleSideSum = function(tri) {
  let sumOfTriangleSides = tri.sideA + tri.sideB + tri.sideC;
  return sumOfTriangleSides;

}
console.log(`perimeter equals ${triangleSideSum(triangle)}`);



const triangleArea = function(tri){

  const s = triangleSideSum(tri) / 2;

  let squareRoot = Math.sqrt( s * ( s - tri.sideA ) * (s - tri.sideB) * (s - tri.sideC) );
  return squareRoot;
}
console.log(triangleArea(triangle));











// // isObtuse(tri) - Returns whether the triangle is obtuse or not
// As above, these functions should take a single object as an argument, which will have the same keys
// as the triangle above, and which you will use for your calcuations.


//
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55



// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };


// const cashRegister = function () {
//   for ( let key in cartForParty ) {
//   console.log(`${cashRegister()}`);
// }
// };//end of cashRegister()


const cakeMix = {
  flour: 2.0,
  eggs: 3.20,
  milk: 1.25,
  sugar: 3.65,
  chocolate: 5.5
}; //end of object
//////////////////////////////// ask luke about this
// const cakeMix = {
//   flour: '2.0',
//   eggs: '3.20',
//   milk: '1.25',
//   sugar: '3.65',
//   chocolate: '5.5'
// }; //end of object

// const cashRegister = function () {
// for ( let key in cakeMix ) {
// console.log(`${key} ${cakeMix[key]}`);
// };//end of for key loop
// };//end of cashRegister()

    // const totalCost = Object.values(cakeMix);
    // // const convertToInteger = totalCost.reduce()

const cashRegister = function(obj) {
  let total = 0;
  for ( let key in obj )
  total += obj[key];
  return total;


};//end of cashRegister()

console.log(cashRegister(cakeMix));



//
// JavaScript Bank
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
//

























































// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// let number = 9999-9999-8888-0000
//
// const sumOfAllDigits = function (creditNum) {
//   let total = 0;
//
//
// }


var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);


//
// const validateCreditCard = function (creditNum) {
//   if ( creditNum )
//
// }//end of validateCreditCard()
