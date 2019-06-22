// Make a few modifications to the code from [Text Soup 2](https://github.com/textchimp/wdi17-homework/tree/master/warmups/week_02/textsoup2) (make a copy, don't edit the version in the homework repo!), to cause the random words to be sourced dynamically via AJAX from Wikipedia, instead of from a hidden DIV already present in the HTML.
//
// Your code should allow the user to specify a Wikipedia page name via a querystring field in the URL, such as `index.html?page=Alan+Turing`, whose contents will then be loaded via the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page).
//
// ([SO](http://stackoverflow.com/questions/2381642/returning-data-from-wikipedia-using-ajax) is your friend, and so is [Google](https://www.google.com.au/search?q=javascript+get+querystring+key+value).)

// Text Soup 2:
// Using the solution for the original text soup, and the dat.gui Javascript library, add GUI controller elements to the Text Soup page to allow real-time control of the following paramaters from within the browser:
//
// fade in time (i.e. a range from 1 to 5000 milliseconds)
// fade out time
// font size
// BONUS:
// add a controller to change the add word interval (consider example #7 from the page above [//]: # (and remember this example from class) )
// add a controller to change the text colour using the colour controller (example 4)
// add a text field controller, and use the word(s) from the text field in between every other random word that is added
// add a button controller which clears all words off the screen when pressed


// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
const getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// Capture the ID of the setInterval timer we create, so we can cancel and re-create it
let timerID = null;

const controls = {
  fadeIn: 2000,
  fadeOut: 2000,
  fontSize: 30,
  wordTimerInterval: 100,
  addWord: '',
};

let words = [];

// create a new GUI object which we call  methods on to add graphical controls
const gui = new dat.GUI();

gui.add(controls, 'fadeIn', 0, 5000);
gui.add(controls, 'fadeOut', 0, 5000);
gui.add(controls, 'fontSize', 10, 200);
gui.add(controls, 'addWord');

gui.add(controls, 'wordTimerInterval', 1, 1000)
.onFinishChange(function( newValue ){
  // This code will run when the slider has stopped being dragged by the user
  console.log( newValue );

  // Cancel the currently-running putWord() setInterval, and start a new one
  // with the new interval value
  window.clearInterval( timerID );
  timerID = window.setInterval( putWord, newValue );
});


// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// Re-use the getRandomElementFromArray() function we wrote at the end of week 1 to pick a random word from the array.
// Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.

// Get the div text contents as a string
// const divContents = $('#words').text();  // like node.innerText
const divContents = 'a b c';


console.log( 'page:', getParameterByName('page') );

$.getJSON('https://en.wikipedia.org/w/api.php?callback=?', {
  action: 'parse',
  format: 'json',
  page: getParameterByName('page'),
  prop: 'text'
})
.done( res => {

  // Use jQuery to make a detached DOM node, set its HTML contents from the API response,
  // and then just get the .text() version of the HTML...
  const pageText = $('<div>').html( res.parse.text['*'] ).text();


  // Turn that long string of words into an array of words by splitting the string
  // up based on a regular expression which looks for spaces, punctuation and newlines.
  // (That punctuation will not appear in the words that fill our new array.)
  // So, note that .split() will accept a regular expression as well as just a string...
  // But for our purposes here, .split(' ') would probably have been okay, and faster.
  // var words = $('#words').text().split(' ');
  words = pageText.split(/[ :_;.,"'\-\n]+/);

  console.log( words );

  // Wait until we have our API response to start the animation
  timerID = window.setInterval(putWord, 100); // add a word to the page every 100ms

}); // .done()




let hue = 0;


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

  let word = getRandomElementFromArray( words );

  // Use the value from the GUI text input approx half the time
  // (but only if the string has contents)
  if( controls.addWord.length > 0 && Math.random() > 0.5 ){
    word = controls.addWord;
  }

  const $wordDiv = $('<div class="word">'); // create a new div with a class already set
  $wordDiv.text( word );  // set the text contents of our new div to be the randomly chosen word

  // Get a random x, y position to use
  const xRand = randRange( window.innerWidth );
  const yRand = randRange( window.innerHeight );

  // const colour = `rgb(${randRange(255)}, ${randRange(255)}, ${randRange(255)})`;
  hue += 3;
  const colour = `hsla(${hue}, 100%, 50%, 70%)`;

  $wordDiv.css({
    top: yRand,
    // display: 'inline-block',
    left: xRand,
    color: colour,
    // fontSize: `${30 + randRange(30)}pt`,
    fontSize: `${ controls.fontSize }pt`,
    // transform: `rotate(${ randRange(360) }deg)`,
    // backgroundImage: 'url(http://fillmurray.com/200/200)'
  });


  $('body').append( $wordDiv ); // add the new div to the page!

  $wordDiv
  .fadeIn( controls.fadeIn )
  .fadeOut( controls.fadeOut, function(){
    // remove the div from the DOM when the fadeOut is finished (i.e., it's invisible)
    $(this).remove();  // you could use $wordDiv instead of $(this) here, too
  });

};
