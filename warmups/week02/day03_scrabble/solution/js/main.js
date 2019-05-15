// Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// // => 14
// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions
// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.

const scrabble = {

  letterScores: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: 'BCMP'.split(''),
    4: 'FHVWY'.split(''),
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  },

  getWordScore: function( word ){

    word = word.toUpperCase();

    let score = 0;  // For storing the accumulating total score as we loop through each letter

    // Loop through each letter in the word and add its score to the total:
    for( let i = 0; i < word.length; i++ ){
      const currentLetter = word[i];
      // console.log( currentLetter );

      // Look up the score for this letter and add it to the total.
      // To do this with our current data structure, we have to loop through every key-value
      // pair in letterScores and see if currentLetter is in the array of letters - if so,
      // add the key (which is the score for any of those letters) to the total.
      for( let key in this.letterScores ){
        // "Does the current array of letters include the current letters of our word?"
        if( this.letterScores[key].includes(currentLetter) ){
          // If so, add the score (the key) to the running total:

          // Object keys are strings, even if we specify them as numbers, so to treat this
          // key as a number (to add instead of concatenating) we have to convert it
          score += parseInt(key);
        }
      } // for-in loop over each value & list of characters having this value

    } // for loop over each character in input word

    return score;

  } // getWordScore(),

} // main scrabble object;

// console.log('Scrabble score for "cabbage":', scrabble.getWordScore('cabbage') );

const scrabbleImproved = {

  letterScores: {
    'a': 1, 'e': 1, 'i': 1, 'o': 1,
    'u': 1, 'l': 1, 'n': 1, 'r': 1,
    's': 1, 't': 1, 'd': 2, 'g': 2,
    'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4,
    'y': 4, 'k': 5, 'j': 8, 'x': 8,
    'q': 10, 'z': 10
  },

  getWordScore: function( word ){

    let score = 0;

    for( let i = 0; i < word.length; i++ ){
      const currentLetter = word[i];
      // No nested looping! Just lookup each letter directly in our object
      // to get its score, and add that to the total
      const letterScore = this.letterScores[ currentLetter ];
      score += letterScore;
      console.log(`${currentLetter} gets a ${letterScore}`);
    }

    return score;

  } // getWordScore()

}; // end of scrabbleImproved object

console.log('Score for "cabbage":', scrabbleImproved.getWordScore('cabbage'));
