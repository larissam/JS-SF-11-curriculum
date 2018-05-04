let pressure;
let conditions;
let weatherData = '{"coord":{"lon":-122.42,"lat":37.77},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":304.49,"pressure":1012,"humidity":20,"temp_min":302.15,"temp_max":306.15},"visibility":16093,"wind":{"speed":6.2,"deg":300},"clouds":{"all":20},"dt":1506549360,"sys":{"type":1,"id":478,"message":0.005,"country":"US","sunrise":1506520974,"sunset":1506563812},"id":5391959,"name":"San Francisco","cod":200}';


// PART 1 - Parse the JSON data
weatherData = JSON.parse(weatherData);
console.log(weatherData); // log to the console so you can better view the object

// PART 2 - update pressure and conditions so the pressure and conditions are logged out
pressure = weatherData.main.pressure;
conditions = weatherData.weather[0].main;

console.log("Barometric pressure: " + pressure + " millibars");
console.log("Current conditions: " + conditions);

