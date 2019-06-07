// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
$('img').css({postion:"relative", left:"0px"});

//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//

// Q1: why it dosn't work by using 'this'???
  $('img').animate({
    left: (window.innerWidth - parseInt($(this).css('width'))) + 'px'
  }, 5000, function(){
    $(this).css('transform', 'scaleX(-1)')
  })
// this needs to be inside a function to make it work!! to have the right value!



// const leftToRight = function(){
//   $('img').animate({
//     left: (window.innerWidth - parseInt($('img').css('width'))) + 'px'
//   }, 2000, function(){
//     $('img').css('transform', 'scaleX(-1)')
//   })
//   rightToLeft();
// };

const rightToLeft = function() {
  $('img').animate({
    left: "0px"
  }, 2000, function(){
    $('img').css('transform', 'scaleX(1)')
  })
  leftToRight();
};
//
// leftToRight();
// //
// for( ; ; ){
//   leftToRight();
//   rightToLeft();
// }

//Q2: how to make it forever, instead of using for loop?
// try to think about it later!!!





// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


Amanda's work
const catDance = function(){

 const cat2 = $(‘#cat2’)

 cat2.animate({left: ’95%’}, 2000, function(){
     cat2.addClass(‘transformMirror’)
   }).animate({left:‘0%’}, 2000, function(){
     cat2.removeClass(‘transformMirror’)
   });

};

catDance();


//Q3, Amanda's cat walking,left: 95%,
// if the image's position is absolute, compared to its 'postioned' parent element's location, and do the left/right/top/bottom offset!!
// in this case, the parent element is body itself, so 95% means offset is 95% of the body width!

// if the image's position is relative, compared to its own default postion, from there, do the offset!
// in this case, if the image's postion is relative, its default location is first thing on the left, and from there do the offsets!
