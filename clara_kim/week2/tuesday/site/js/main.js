// --- welcome.html --- //

console.log('hello')

// Ruby rotation and fade
//
// const rubyRotate = function()


// show random words using jQuery

const divContents = $('#words').text(); //node.innerText
// console.log(divContents)
// const words = divContents.split("");

const words = divContents.split('');
// const words = divContents.split(/[_:;.,?"'\-\n]+/); //use a regex to specify a range of characters to split on
console.log(words);

const randRange = function(max){
    return Math.floor(Math.random()*max);
  };

  const getRandomElementFromArray = function(array){
    const randomIndex = randRange(array.length);
    return array[randomIndex];
  };

  const putWord = function(){
    const word = getRandomElementFromArray(words);
    const $wordDiv = $('<div class="word">'); // create a new div with a class already set
    $wordDiv.text(word); // set the text contexts of our new div to be a randomly chosen word

  const xRand = randRange(window.innerWidth);
  const yRand = randRange(window.innerHeight);

  const colour = `rgb(${randRange(255)}, ${randRange(0)}, ${randRange(255)}`;

  $wordDiv.css({
    top: yRand,
    left: xRand,
    color: colour,
    fontSize: `${5 + randRange(50)}pt`, // between 10-30
    // camelCase
    transform: `rotate(${randRange(360)}deg)`
    // backgroundImage: 'url()'
  });

  $('body').append($wordDiv); // add the new div to the page!

  $wordDiv.fadeIn(1500).fadeOut(3500, function(){
    // remove the div from the DOM when the fadeOut is finished (i.e., it's invisible)
    $(this).remove(); // you could use $wordDiv instead of $(this) here, too
  });
  // anonymous function to run after 2.5s

};

window.setInterval(putWord,10);

// --- index.html --- //

// Click the secret ruby
const ruby = document.getElementById('secretRuby');

ruby.addEventListener('click', function () {
  alert('You have discovered the secret ruby!');
});


// Duck tells you to not to ask a question
const quiet = document.getElementById('duckQuiet');

quiet.addEventListener('click', function () {
  alert('Never ask me questions.');
});


// Duck doing the macarena speeds by
const duck = document.getElementById('duckMacarena');

duck.style.position = 'absolute';
duck.style.left = 0;

duck.addEventListener('click', function () {
  alert('Reward!');
});

window.setInterval(function(){
  const left = parseInt(duck.style.left);
  duck.style.left = (left + 1) + 'px';
}, 20);



// // Japanese name fades out
// const japanese = document.getElementById('japanese');
// japanese.style.opacity = 1.0;
//
// const japFadeAway = function() {
//   japanese.style.opacity = japanese.style.opacity - 0.01;
// };
// window.setInterval(fadeAway, 10);
