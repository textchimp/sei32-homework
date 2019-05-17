console.log("hi");

// const navBar = $('#mainNav');
// $('body').prepend(navBar);

$(".mainNav").clone().prependTo(".onlyBody");

const cat = document.querySelector('#cat');
const body = document.querySelector('body');

// place cat in upper left corner
cat.style.position = 'absolute';
cat.style.left = 0;

// move cat to right 10px every 50s
const catWalk = function (){

  if (parseInt(cat.style.left) < window.innerWidth) {


    let oldLeft = parseInt(cat.style.left);
  // turns 10px, 20px, 30px etc to 10, 20, 30
    let newLeft = oldLeft + 10;
      cat.style.left = newLeft + 'px'

//reset cat to left side
    } else {
      cat.style.left = 0;

    };

} ;

window.setInterval(catWalk, 50);

const catDance = function(){

  const cat2 = $('#cat2')

  cat2.animate({left: '95%'}, 2000, function(){
      cat2.addClass('transformMirror')
  }).animate({left:'0%'}, 2000);

};
catDance();

// window.setInterval(catDance, 50);


// line 6 why can't I clone and prependTo Nav bar (line 6)
