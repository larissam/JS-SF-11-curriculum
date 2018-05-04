// PART A

// QUESTION 1
// Read the code below and discuss with a partner what you expect to happen.
// Uncomment it out.

// QUESTION 2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: Think about the scope of each variable declaration.

// original code
// let cost = 17.52;

// function setPayment() {
//     if (cost < 10) {
//         let payMethod = 'cash';
//     } else {
//         let payMethod = 'credit';
//     }
//     console.log("I'll pay with " + payMethod); 
// }

// setPayment();

let cost = 17.52;

function setPayment() {
    let payMethod;

    if (cost < 10) {
        payMethod = 'cash';
    } else {
        payMethod = 'credit';
    }
    console.log("I'll pay with " + payMethod); 
}

setPayment();

// PART B

// QUESTION 1
// Read through the following code and discuss with a partner what you expect it to do.
// Uncomment it out.

// QUESTION2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: What is the difference between using let and const for each variable?

// original code
// function calcTotal(price, shipping) {
//     const taxRate = 0.085;
//     const totalTax;
//     const totalCost;
//     totalTax = taxRate * price;
//     totalCost = (price + totalTax + shipping).toFixed(2);
//     console.log('The total cost is $' + totalCost);
// }

// calcTotal(85.94, 12.95);

function calcTotal(price, shipping) {
    const taxRate = 0.085;
    let totalTax;
    let totalCost;
    totalTax = taxRate * price;
    totalCost = (price + totalTax + shipping).toFixed(2);
    console.log('The total cost is $' + totalCost);
}

calcTotal(85.94, 12.95);