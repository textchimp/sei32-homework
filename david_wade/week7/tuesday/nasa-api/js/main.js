//https://api.nasa.gov/neo/rest/v1/feed?start_date=2001-01-01&end_date=2001-01-02&api_key=4fQoPXSLYTnIH0daYg5W1S4BAffcejRd7pd9UhmC

// https://www.neowsapp.com/rest/v1/feed?start_date=2000-12-31&end_date=2001-01-01&detailed=false&api_key=4fQoPXSLYTnIH0daYg5W1S4BAffcejRd7pd9UhmC"

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2001-02-02&end_date=2002-03-02&detailed=false&api_key=4fQoPXSLYTnIH0daYg5W1S4BAffcejRd7pd9UhmC

// https://www.neowsapp.com/rest/v1/feed?start_date=2000-12-31&end_date=2001-01-01&detailed=false&api_key=4fQoPXSLYTnIH0daYg5W1S4BAffcejRd7pd9UhmC

// const baseUrl = 'https://api.nasa.com/neo/rest/v1/feed?';
const baseUrl = 'https://api.nasa.gov/neo/rest/v1/feed?';
const apiKey = '4fQoPXSLYTnIH0daYg5W1S4BAffcejRd7pd9UhmC';
// const apiKey = 'DEMO_KEY';

$(document).ready(function(){
  console.log('jquery loaded!');

  // $('#search-form').focus();
  // $('#start-date').focus();
  // $('#end-date').focus();

  $('#search-form').on('submit', function(){

      console.log('done');

      const queryStartDate = $('#start-date').val();
      const queryEndDate =   $('#end-date').val();

      console.log(`start date: ${queryStartDate}`);
      console.log(`end date: ${queryEndDate}`);

      const url = `${baseUrl}start_date=${queryStartDate}&end_date=${queryEndDate}&api_key=${apiKey}`;
      console.log(url);

      return false; //stops the page from refreshing after form submitting

      $.getJSON(url)
      .done(function(res){
        console.log(res);
        $('#result').empty(); //clear the div

        for (var i = 0; i < res.near_earth_objects.length; i++) {
          const asteroids = res.near_earth_objects[i];

          // const output = asteroids;

          $('#results').append(asteroids);

        }//end of for loop


      });//end of search for handler



    });//end of $(#search-form) handler









  });//end of document ready
