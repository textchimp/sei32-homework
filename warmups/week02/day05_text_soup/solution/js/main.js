// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// Re-use the getRandomElementFromArray() function we wrote at the end of week 1 to pick a random word from the array.
// Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.

// Get the div text contents as a string
const divContents = $('#words').text();  // like node.innerText

// Turn that long string of words into an array of words by splitting the string
// up based on a regular expression which looks for spaces, punctuation and newlines.
// (That punctuation will not appear in the words that fill our new array.)
// So, note that .split() will accept a regular expression as well as just a string...
// But for our purposes here, .split(' ') would probably have been okay, and faster.
// var words = $('#words').text().split(' ');
const words = divContents.split(/[ :_;.,"'\-\n]+/);

// Takes a max value and returns a random number between 0 and max-1
const randRange = function( max ){
  return Math.floor(Math.random() * max);
};

// Takes an array and returns a random element from it
const getRandomElementFromArray = function( array ){
  const randomIndex = randRange( array.length );
  return array[ randomIndex ];
};


// Our main function to randomly put a word on the page
const putWord = function(){

  const word = getRandomElementFromArray( words );

  const $wordDiv = $('<div class="word">'); // create a new div with a class already set
  $wordDiv.text( word );  // set the text contents of our new div to be the randomly chosen word

  // Get a random x, y position to use
  const xRand = randRange( window.innerWidth );
  const yRand = randRange( window.innerHeight );

  const colour = `rgb(${randRange(255)}, ${randRange(255)}, ${randRange(255)})`;

  $wordDiv.css({
    top: yRand,
    left: xRand,
    color: colour,
    fontSize: `${30 + randRange(30)}pt`,
    transform: `rotate(${ randRange(360) }deg)`,
    backgroundImage: 'url(http://fillmurray.com/200/200)'
  });


  $('body').append( $wordDiv ); // add the new div to the page!

  $wordDiv.fadeIn(2000).fadeOut(2000, function(){
    // remove the div from the DOM when the fadeOut is finished (i.e., it's invisible)
    $(this).remove();  // you could use $wordDiv instead of $(this) here, too
  });

};

window.setInterval(putWord, 100); // add a word to the page every 100ms
