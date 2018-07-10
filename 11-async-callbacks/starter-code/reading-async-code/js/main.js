// 
// PART 1 - Set the apiKey variable to your API key
// 



const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '2e1d4c7c2deb644196be34cc6c51bf78'; // replace with your own



// 
// PART 2 - Uncomment out the code below. What do you think temp on line 26 will be? What about on line 24? Discuss.
// 



let temp = '';
$.get(weatherUrl, {
    q: 'San Francisco',
    appId: apiKey
}, function(response){
    temp = response.main.temp;
    console.log('temp inside callback: ', temp);
    // $('#openWeatherTemp').text(temp);

    // all the stuff that is dependent on your api's response
});
console.log('temp: ', temp);