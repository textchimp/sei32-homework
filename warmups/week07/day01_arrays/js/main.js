// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.

const reverse = function( arr ){

  const output = [];

  // Counting backwards method:
  // for( let i = arr.length - 1; i >= 0; i-- ){
  //   const currentElem = arr[ i ];
  //   output.push( currentElem );
  // } // for

  // Counting forwards, but using .unshift()
  for( let i = 0; i < arr.length; i++ ){
    // const currentElem =   arr[ arr.length - 1 - i ];
    const currentElem = arr[ i ];
    output.unshift( currentElem );
  }

  return output;

};  // reverse()


const flatten = function( arr ){

  let output = [];

  for( let i = 0; i < arr.length; i++ ){
    const currentElem = arr[ i ];

    // if( currentElem.constructor === Array ){
    if( Array.isArray(currentElem) ){
      // We need to loop through this nested array and add its elements to output.
      // We can't reuse `i`, it's already being used by the outer loop!

      // for( let j = 0; j < currentElem.length; j++ ){
      //   const innerElem = currentElem[j];
      //   output.push( innerElem );
      // }
      output = output.concat( currentElem );

    } else {
      // We can just add currentElem itself to output, directly
      output.push( currentElem );
    }


  }


  return output;

}; // flatten()


const firstArray = [ 'one', 'two', 'three', 'four' ];
// let reversed = reverse( [ 1,2,3,4] );
let reversed = reverse( firstArray );
console.log('reversed array:', reversed);

const secondArray = [ "Hello", ["World", 42] ];
// const secondArray = [ "Hello", 42, 43, 44 ];
let flattened = flatten( secondArray );
console.log('flattened array:', flattened);
