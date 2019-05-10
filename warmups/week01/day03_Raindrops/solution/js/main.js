// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

const isAFactor = function( num, divisor ){
  // This function just returns true or false, depending on whether
  // divisor is a factor of num or not; most importantly, it has let us put
  // a clear label on the mathematical test we are performing:
  return num % divisor === 0;
};

const raindrops = function( number ){

  let output = '';  // initialising our output variable to be an empty string

  if( isAFactor(number, 3) ){
    // console.log('Pling');
    // output = 'Pling';
    // output = output + 'Pling';
    output += 'Pling';  // append 'Pling' to the end of output (does not overwrite)
  }

  if( isAFactor(number, 5) ){
    output += 'Plang';
  }

  if( isAFactor(number, 7) ){
    output += 'Plong';
  }


  if( output.length === 0 ){
    // If output is still empty, that means none of 3, 5 or 7 were factors
    // (otherwise it would have something in it)
    // ... so just set the contents to be the original number
    output = number;
  }

  return output;

};  // end of raindrops()

console.log('Raindrops for 28:', raindrops(28) );
console.log('Raindrops for 1755:', raindrops(1755) );
console.log('Raindrops for 34:', raindrops(34) );
