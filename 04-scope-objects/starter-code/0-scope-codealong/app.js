// Global scope
let temp = 75;
function predict() {
  console.log(temp); // 75
}
console.log(temp); // 75



// Local scope
function predict() {
  let weather = "Sunny";
  console.log(temp + " and " + weather); // 75 and Sunny
}
console.log(temp + " and " + weather);  // ‘forecast’ is undefined



// Block scope
// key is here it's function AND if/else statements
if (temp > 70) {
  let forecast = "It’s gonna be warm!";
  console.log(temp + "! " + forecast); // 75! It’s gonna be warm!
}
console.log(temp + "! " + forecast); // ‘forecast’ is undefined