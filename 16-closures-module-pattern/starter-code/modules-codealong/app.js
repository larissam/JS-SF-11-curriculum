// This is the solution code to the pokemon API
// const url = "https://pokeapi.co/api/v2/pokemon/";
// $.get(url, function(data) {
//   const results = data.results;
//   for (let i = 0; i < results.length; i++) {
//     const pokemon = results[i];
//     $("#pokemon").append(`<li>${pokemon.name}</li>`);
//   }
// });

// Let's convert it to a module

// What are some things we'd want to keep private?
// What are some functions you'd like the module to have?

// Three steps to make a module:
// 1. Make a function that returns an object
// 2. Put "private" variables outside of at returned object
// 3. Convert to an IIFE (immediately-invoked function expression)
