// console.log('loaded');
$(document).ready(function(){

  $('#movie-search').on('click', function(){

  const xhr = new XMLHttpRequest();

  xhr.onload = function(){
    // console.log('Finished loading response from server!');
    // console.log('RESPONSE:', xhr.response);

    const movieSearch = JSON.parse(xhr.response);
    // console.log(movie);
    //loop goes here to access object and its arrays [title] & [bio]
    $('#results').html(`<p>${movieSearch.results}</p>`);



    const search = $('#movie').val();

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${search}`);

    xhr.send();

  };





});//end of $('#movie-search')

}); //end document ready
