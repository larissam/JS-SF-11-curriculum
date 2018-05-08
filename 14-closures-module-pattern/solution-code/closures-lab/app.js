// Let's make a 'getCounter' function that returns a function 'counter' that starts at 0 
// Unlike the previous counter, let's add 5 each time 'counter' is called
function getCounter() {
    // make a local variable here
    let count = 0;

    // return a 'counter' function that closes over the local variable
    return function() {
        console.log(count);
        count += 5;
    }
}

const counter1 = getCounter();
const counter2 = getCounter();
counter1(); // logs 0
counter1(); // logs 5
counter1(); // logs 10
counter2(); // logs 0
counter2(); // logs 5
