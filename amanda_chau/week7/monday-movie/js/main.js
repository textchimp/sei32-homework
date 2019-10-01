console.log("loaded movie js")

$(document).ready(function(){
  const xhr = new XMLHttpRequest();

  $('#movie-search').on('click', function(){
    xhr.onload = function(){
      console.log('Finished Loading Response from Server');
      // console.log('RESPONSE:', xhr.response );
      // console.log(typeof xhr.response)
      // xhr.response is a string

      const response = JSON.parse ( xhr.response );
      // console.log(response);
      // response is a hash


      let results = response.results;
      // console.log(results);
      // results in an array

      results.forEach(function(movie){
        $('#output').append( `<img src="http://image.tmdb.org/t/p/w154${movie.poster_path}" alt="">` );
        console.log(movie.poster_path);
        // $('#output').append( `<p><strong>${movie.title}</strong><br></p>` );
      });


    };


    const query = $('#query').val();
    const apiKey = '24d863d54c86392e6e1df55b9a328755'
    // baseUrl = 'https://api.themoviedb.org/3'
    // `${ baseUrl }/movie/${ query }?api_key=${ apiKey }`
    // https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);

    xhr.send();

    console.log('Finished request')
  }); //end of movie-search



});
