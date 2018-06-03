// Write code that logs the first 10 powers of 2 (ie. 2^1, 2^2, 2^3...) to the console

// BONUS 1: Rewrite your code to allow a user to enter the number of powers they want (instead of 10)
// (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

let exponent = parseInt(window.prompt('Enter your exponent: '), 10);
let result = 1;
for(let i = 1; i <= 10; i++) {
    result *= exponent;
    console.log(result);
}

// BONUS 2: Rewrite your code to use a while loop rather than a for loop. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

let pow = 1;
result = 1;
while(pow <= 10) {
    result *= 2;
    console.log(result);

    pow++;
}

// BONUS 3: Rewrite your code to use a do/while loop rather than a for loop or while loop. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

pow = 1;
result = 1;
do {
    result *= 2;
    console.log(result);

    pow++;
} while(pow <= 10);