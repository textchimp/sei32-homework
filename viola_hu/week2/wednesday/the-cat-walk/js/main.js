// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
const cat = document.querySelector('img');


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
cat.style.position = 'absolute';
cat.style.left = '0px';

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
const catWalk = function() {
  const currentLeftOffset = parseInt(cat.style.left);
  cat.style.left = (currentLeftOffset + 10) + 'px';
};
//
// // Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// //
window.setInterval(catWalk, 50);


// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//

// Getting the window width and height
//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//
const imageWidth = cat.width;
const untilRightEdgeWidth = document.body.clientWidth - imageWidth;

//**************** Q: why it didn't work?*****************
// let currentLeftOffset = parseInt(cat.style.left);
// since the let currentLeftOffset variable was set outside the function which is a fixed value and won't be changed, i.e.
// cat.style.left = '0px';
// let currentLeftOffset = cat.style.left;
// => currentLeftOffset = '0px', which has nothing to do with the cat.style.left anymore!!! it's fixed value now.
// so everytime the function is called,
// the currentLeftOffset variable inside the function would go outside the function and find the currentLeftOffset variable at the global scope, with the fixed value of '0px', EVERYTIME!!!
// then left value +10px everytime, but everytime the function is called, currentLeftOffset is like reset to initial value 0px EVERYTIME, so left is not actually incrementing its value beyond 10px!
//********************************************************
//
const catWalk = function() {
  const currentLeftOffset = parseInt(cat.style.left);

  if (currentLeftOffset <= untilRightEdgeWidth) {
    cat.style.left = (currentLeftOffset + 10) + 'px';
  } else {
    cat.style.left = '0px';
  }
};

window.setInterval(catWalk, 50);


// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//

const catWalk = function() {
  const currentLeftOffset = parseInt(cat.style.left);

  if (currentLeftOffset < untilRightEdgeWidth && cat.style.transform === "") {
    cat.style.left = (currentLeftOffset + 10) + 'px';

  } else

  if((currentLeftOffset >= untilRightEdgeWidth) && cat.style.transform === ""){
    cat.style.transform = 'scaleX(-1)';
    cat.style.left = (currentLeftOffset - 10) + 'px';
  } else

  if (currentLeftOffset > 0 && currentLeftOffset < untilRightEdgeWidth && cat.style.transform === 'scaleX(-1)'){
    cat.style.left = (currentLeftOffset - 10) + 'px';
  } else

  if (currentLeftOffset <= 0 && cat.style.transform === 'scaleX(-1)') {
    cat.style.transform = "";
    cat.style.left = (currentLeftOffset + 10) + 'px';
  }

};

const timer = window.setInterval(catWalk, 50);


// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//


const catWalk = function() {
  const currentLeftOffset = parseInt(cat.style.left);

  if (currentLeftOffset < untilRightEdgeWidth / 2 && cat.style.transform === "") {
    cat.style.left = (currentLeftOffset + 10) + 'px';

  } else

// stop the previous animation, and then start a new one, and stop this one, and restart the previous one!
  if ((currentLeftOffset >= untilRightEdgeWidth / 2) && cat.style.transform === "") {

    const changeImage = function() {
      cat.src = "http://fillmurray.com/300/300";

    }
    const catDance = window.setInterval(changeImage,10);

    window.setTimeout(catDance, 3000);

    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

  }



  if ((currentLeftOffset >= untilRightEdgeWidth/2) && cat.style.transform === ""){
    cat.style.transform = 'scaleX(-1)';
    cat.style.left = (currentLeftOffset - 10) + 'px';
  } else

  if (currentLeftOffset > 0 && currentLeftOffset < untilRightEdgeWidth && cat.style.transform === 'scaleX(-1)'){
    cat.style.left = (currentLeftOffset - 10) + 'px';
  } else

  if (currentLeftOffset <= 0 && cat.style.transform === 'scaleX(-1)') {
    cat.style.transform = "";
    cat.style.left = (currentLeftOffset + 10) + 'px';
  }
  //

};

const timer = window.setInterval(catWalk, 50);

// Bonus #4: Pretty much go nuts or whatever.
//
