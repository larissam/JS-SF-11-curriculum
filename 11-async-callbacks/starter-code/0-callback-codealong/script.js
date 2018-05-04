/* setTimeout(function() {
    console.log("Hello world!");
}, 2000) */

const numbers = [[1,2],[8,6],[5,9]];

// PART 1
// create a function named 'sumArray', that sums each pair of numbers
// for example, sumArray(numbers) should return [3, 14, 14]

const sumArray = function(values) { // takes an array of values as a parameter
};

// create a function named 'diffArray', that subtracts the second number from the first in each pair
// for example, diffArray(numbers) should return [-1, 2, -4]

const diffArray = function(values) { // takes an array of values as a parameter
};

// function that accepts a callback function as a parameter
const showResults = function(values, callback) { // callback can be sumArray or diffArray
  // create a new variable and store the result of calling the callback function, 
  // providing the values parameter as an argument
  const changedArray = callback(values);
  console.log("The result of " + callback.name + " is " + changedArray);
}

showResults(numbers, sumArray); 
showResults(numbers, diffArray); 
