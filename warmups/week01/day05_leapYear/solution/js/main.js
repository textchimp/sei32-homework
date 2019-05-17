//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// * Every year that is evenly divisible by 4
// * Except if it is evenly divisible by 100...
// * Unless it is also divisible by 400
//
// Test Data... Make sure it is working!
//
// * 1997 is not a leap year, it should return false
// * 1996 is a leap year, it should return true
// * 1900 is not a leap year, it should return false
// * 2000 is a leap year, it should return true

// The test we need is "if the year is divisible by 4 AND (it's NOT divisble by 100 OR it's divisible by 400)"

// const isLeapYear = function( year ){
//   // let result;
//
//   return (year % 4 === 0) && ( (year % 100 !== 0) || (year % 400 === 0)  );
//
//   // if( (year % 4 === 0) && ( (year % 100 !== 0) || (year % 400 === 0)  ) ){
//   //   return true;  // it's a leap year
//   // } else {
//   //   return false;
//   // }
//
//
//   // return result;
// };


// Helper function to make our code more readable
const isDivisibleBy = function( num, divisor ){
  return num % divisor === 0;
};

const isLeapYear = function( year ){

  // first check if it's divisible by 4
  if( isDivisibleBy(year, 4) ){

    // ... if it is divisible by 4, make sure it's NOT divisible by 100... or if it is divisible
    // by 100, make sure it's also divisible by 400
    if( !isDivisibleBy(year, 100) || isDivisibleBy(year, 400) ){
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }

};



// Test suite:
console.log('For the year 1997, we expect FALSE');
console.log('Actual output: ', isLeapYear(1997) );
console.log('--------------------');
console.log('For the year 1996, we expect TRUE');
console.log('Actual output: ', isLeapYear(1996));
console.log('--------------------');
console.log('For the year 1900, we expect FALSE');
console.log('Actual output: ', isLeapYear(1900));
console.log('--------------------');
console.log('For the year 2000, we expect TRUE');
console.log('Actual output: ', isLeapYear(2000));
console.log('--------------------');
