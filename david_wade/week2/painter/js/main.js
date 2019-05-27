
let hue = 0; // our hue increment counter

let lastX = 0; //keep track of the last X position ( so we can calculate speed)


const createBlob = function( x, y){
  // console.log('createBlob :', x, y);

  //create a new Div , set some CSS and add it to the page
  const $blob = $('<div class="blob">');



  const xVelocity = Math.abs(x - lastX);
  lastX = x;
  console.log('mouse x speed is ', xVelocity);

  let size = xVelocity;



  hue++;
  let color = `hsl(${hue}, 100%, 50%)`;

  $blob.css({
    backgroundColor: color,
    top: y - (size/2) + 'px',
    left: x - (size/2) + 'px',
    width: size + 'px',
    height: size + 'px',
  })

  $('body').append( $blob );

  $blob.animate({top: window.innerHeight})

};


$(document).ready(function(){
  console.log('DOM loaded!');
});

//do something whenever the mouse moves anywhere in the document
$(document).on('mousemove', function( ev ){
  // console.log('mousemove:', ev.clientX, ev.clientX);
  if( ev.shiftKey ){
    createBlob(ev.clientX, ev.clientY);
  }
});





// end of document
