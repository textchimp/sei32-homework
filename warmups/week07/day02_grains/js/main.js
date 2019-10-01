//
// Write a program that shows
// 1) how many grains were on a particular square
//   - Example: `'Square 3: 4'`.
//
// 2) how many grains were on each square
//   - That is:
//     `'Square 1: 1'`
//
//     `'Square 2: 2'`
//
//     `'Square 3: 4'`
//
//     `'Square 4: 8'`
//
//     `'Square 5: 16'`
//
//     - [etc]
//
// 3) the total number of grains on the board
//   - That is:
//     `'The total number of grains is _[????]_'`

const grains = {

  // Don't use 'magic' (unexplained) numbers in your code!
  // Store them into variables so they have a label that explains them
  squareMax: 64,

  grainsOnSquare: function( num ){
     return 2 ** (num - 1);
  },

  grainsOnAllSquares: function(){

    for( let i = 1; i <= this.squareMax; i++ ){
      console.log(`Square ${ i }: ${ this.grainsOnSquare(i) }`);
    }

  },

  totalGrainsOnBoard: function(){

    let runningTotal = 0;

    for( let i = 1; i <= this.squareMax; i++ ){
      runningTotal += this.grainsOnSquare(i);
    }

    return runningTotal;
  }

};  // grains



// console.log( 'square 1 grains:', grains.grainsOnSquare(0) );

// grains.grainsOnAllSquares();

console.log( 'Total grains on board:', grains.totalGrainsOnBoard() );
