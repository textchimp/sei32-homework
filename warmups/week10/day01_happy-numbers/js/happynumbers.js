// Version 1
// first we define a function to find the sum of the squares of the digits
var sumofDigitSquares = function ( num ) {

  var numStr = num.toString();
  var sum = 0;

  for (var i = 0; i < numStr.length; i++) {
    sum += +numStr[i] * +numStr[i];
  }

  // var digit; // the fancy way of finding squareSum
  // while (num > 0) {
  //   digit = num % 10;
  //   sum += digit * digit;
  //   num = (num -digit) / 10;
  // }

  return sum
}

// console.log(sumofDigitSquares(16));

// this is our logic function to find out if a number is happy number, or stuck in a sad cycle forever
var isHappy = function (num) {

  var cycle = {};

  var squareSum = num;

  while(true) {
    console.log('squareSum', squareSum, 'sumofDigitSquares', sumofDigitSquares(squareSum));
    squareSum = sumofDigitSquares( squareSum );
    console.log("================================");

    if ( squareSum === 1 ) {
      // found a happy number
      console.log("squareSum is now 1 we have found a happy number", num);
      return true;
    }

    if ( cycle[ squareSum ] === true ) {
      // detected a repeating pattern, not a happy number
      console.log('found repeating pattern, number is not happy:');
      return false;
    }

    cycle[squareSum] = true;
    console.log('cycle', cycle, 'squareSum', squareSum);
  }
};

// Our function to generate our list of happy numbers
var generateHappyNumbers = function( count ) {

  var found = 0;

  for (var i = 0; found < count; i++) {
    console.log('=========================================');
    console.log('testing', i);
    if ( isHappy(i) ) {
      found++
      console.log('Found happy number #%d: %d', found, i);
      //string substitution patterns built into console.log - good to know but using ES6 backticks are more common/easier
    }
  }
};

generateHappyNumbers( 10 );

// Version 2 - object with methods refactor
// const happyNums = {
//   happyList: [],
//
//   squareSumHelper (num) {
//     let sum = 0;
//
//     let numStr = num.toString();
//
//     for ( let i = 0; i < numStr.length; i++ ) {
//       sum += +numStr[ i ] * +numStr[ i ]
//     }
//
//     // while (num > 0) {
//     //   digit = num % 10;
//     //   sum += digit * digit;
//     //   num = (num - digit) / 10;
//     // }
//     // console.log(sum);
//     return sum;
//   },
//
//   isHappyLogic (num) {
//     let cycle = {};
//     let squareSum = num;
//     let count = 0;
//     console.log("new number to check: ", num);
//
//     while (true) {
//       squareSum = this.squareSumHelper(squareSum);
//       console.log("================================");
//
//       if (squareSum === 1) {
//         console.log("squareSum is now 1 we have found a happy number", num);
//         return this.happyList.push(num)
//       }
//
//       if (cycle[squareSum]) {
//         console.log("detected a repeating pattern. STOP CHECKING");
//         return false;
//       }
//
//       cycle[squareSum] = true;
//       count++;
//       console.log("cycle", cycle);
//       console.log("squareSum", squareSum);
//     }
//   },
//
//   printHappyList(num) {
//     for ( let i = 0; this.happyList.length < num; i++ ) {
//       this.isHappyLogic(i);
//     }
//     console.log(this.happyList);
//     return this.happyList;
//   }
// }
//
// // happyNums.squareSumHelper( 16 );
// happyNums.printHappyList( 10 );
