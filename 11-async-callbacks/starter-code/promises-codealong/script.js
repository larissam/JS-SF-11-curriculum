/*
 * Fetch codealong
 */


const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appID = ''; // your api key here (from last class)

$('#zip').on('keyup', function() {
  const zipString = $('#zip').val(); 
  if (zipString.length === 5) {
      console.log(zipString);

      // use zipString to get a city and state from: http://api.zippopotam.us/
      // then, just log out the result
      const zippopotamUrl = 'http://api.zippopotam.us/us/';
      $.get(zippopotamUrl + zipString).then(function(data){
        console.log('data: ', data);
        console.log('place name: ', data.places[0]["place name"]);
      }).fail(function(error){
        console.log('error: ', error)

      })

  } 
});



