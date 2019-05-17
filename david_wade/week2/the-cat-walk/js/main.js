// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that
// it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the
// right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving
// across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart
// them at the left hand side ("0px"). So they should keep walking from left
// to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move
// backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace
// the img with an image of a cat dancing, keep it dancing for 10 seconds, and then
//  replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.

console.log('Meow!');

// const kitty = document.getElementsByTagName('img');
// // console.log(document.getElementsByTagName('img'));
//
// const stageRight = function(){
// kitty.style.position = 'absolute';
// kitty.style.left = 0;
// }
//
// const catWalk = function(){
//   let startPos = parseInt(stageRight());
//   let endPos = startPos + 10;
//   kitty.style.top = endPos + 'px';
// }
//
// window.setInterval(catWalk, 100);


// const $kitty = $('img'); //////////////////////////////////////
//
// $kitty.css('left','0px');
//

// const catWalk = function () {
//   const startPos = $kitty.css('position');
//   console.log('startPos');
//   const walk = startPos += 20;
//   return;


  // $kitty.css('left', '20px');
  // console.log('catWalk');

//
// };


// console.log(catWalk());
//////////////////////////////////////////////////////////////////////


const $blackCat = $('#blackCat');

$blackCat.css('left', '0px');

const catWalk = function(){
const start = $blackCat.css('left', '0px');
let animation = start +='20px'
return animation;


};





window.setInterval(catWalk, 1000);
///////////////////////////////////////////////////////////////
