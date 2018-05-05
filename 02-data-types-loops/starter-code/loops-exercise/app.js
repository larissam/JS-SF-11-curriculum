// Write code that creates a for loop that calculates 2 to the power of 10 and console.logs each step of the calculation. 
// For instance, the for loop should console.log the result of 2^1, then the result of 2^2, etc., until it gets to 2^10.

// HINT (pseudocode):
// Start by creating a variable to store the power of 2 you want to calculate. (In the above example, the value of this variable would be 10.)
// Then create a for loop to calculate each step of this process and log it to the console.

// IS THIS SUPPOSED TO BE A FUNCTION???
// but we haven't learned functions yet
// the directions aren't clear
// would also be better to like, show what the console should log
// i made it by default 2^10.
// also, you can't define let twice... maybe I should call it like "bonus2Result"?
// i totally did something different than the answer code. let's see if bunu can do this one.
let result = 1;
for(let i = 1; i <= 10; i++) {
    result *= 2;
    console.log(result);
}

// BONUS 1: Rewrite your code to allow a user to enter the exponent value, rather than hard-coding it into your program. (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

let exponent = parseInt(window.prompt('Enter your exponent: '), 10);
result = 1;
for(let i = 1; i <= 10; i++) {
    result *= exponent;
    console.log(result);
}

// BONUS 2: Rewrite your code to use a while loop rather than a for loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

let pow = 1;
result = 1;
while(pow <= 10) {
    result *= 2;
    console.log(result);

    pow++;
}

// BONUS 3: Rewrite your code to use a do/while loop rather than a for loop or while loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

pow = 1;
result = 1;
do {
    result *= 2;
    console.log(result);

    pow++;
} while(pow <= 10);