// Let's make a 'getCounter' function that returns a function 'counter' that starts at 1 and increments each time its called
function getCounter() {
    // make a local variable here

    // return a 'counter' function that closes over the local variable
}

const counter1 = getCounter();
const counter2 = getCounter();
counter1(); // logs 1
counter1(); // logs 2
counter1(); // logs 3
counter2(); // logs 1
counter2(); // logs 2