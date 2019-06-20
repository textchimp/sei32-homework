
const baseUrl = 'http://api.giphy.com/v1/gifs/';
const apiKey = 'ygo5Euxoen22CKVa626T0SBBcN683XKB';

$(document).ready(function(){
  $('#search-form').on('submit', function(){
    $('#query').focus();
    console.log('form clicked!');
  const query = $('#query');
  const url = `${baseUrl}search?q=${query}&api_key=${apiKey}&limit=1`;

  $.getJSON( url )
  .done(function( response ){
    //gives back an object called 'data' within is a key called
    //'url' which i suspect will give me an image
    //keep above in mind for loop below
    console.log( response );
    console.log('response.data: ', response.data);
    console.log('response.data[0]: ', response.data[0]);
    console.log('response.data[0].images: ', response.data[0].images);
    console.log('response.data[0].images.url: ', response.data[0].images.original.url);

    $('#results').empty();

    for (let i = 0; i < response.data.length; i++) {
      const giphy = response.data[i];
      // const output = `<img src=`
    }
    $('#results').append(response.data[0].images.original.url)

    console.log(response.data);








  });//end of .done



return false;
});//end of #search-form

});//end of document ready

// (`${baseUrl}/v1/gifs/search?q=${query}&api_key=${apiKey}`);
