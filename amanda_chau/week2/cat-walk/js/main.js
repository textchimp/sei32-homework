console.log(`JS is working`)

// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// select img tag
const cat = document.querySelector('img');
const body = document.querySelector('body');

// place cat in upper left corner
cat.style.position = 'absolute';
cat.style.left = 0;

// move cat to right 10px every 50s
const catWalk = function (){

  if (parseInt(cat.style.left) < 1000) {
  //   cat.style.left = 0;
  //   } else {


    let oldLeft = parseInt(cat.style.left);
  // turns 10px, 20px, 30px etc to 10, 20, 30
    let newLeft = oldLeft + 10;
      cat.style.left = newLeft + 'px'

    } else {
      cat.style.left = 0;

    }
   // moves cat to the right 10px more every 50 milliseconds
    //  cat.style.left = (left + 10) + 'px';

//
//


} ;

window.setInterval(catWalk, 50);


// const watchKittyFall = function() {
//   let oldTop = parseInt(img.style.top);
//   let newTop = oldTop + 10;
//   img.style.top = newTop + 'px';
// };
// ​
// ​window.setInterval(watchKittyFall, 1000);


// does this function loop????
