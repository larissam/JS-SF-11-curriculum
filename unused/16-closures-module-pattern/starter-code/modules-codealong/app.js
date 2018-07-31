// Create a module called 'Bank' that has 2 methods: deposit, and withdraw
// The bank has $1000 in reserves.
// Deposit takes an amount. When it is called, it adds the amount to the reserves.
// Withdraw takes an amount. When it is called, it compares the amount to the reserves.
// If the amount is greater than the amount in reserves, it logs an error
// Make sure that you cannot access "reserves" outside the bank!

const bankModule = (function(){
    // the bank has a set amount of reserves
    let reserves = 1000;

    // you can withdraw and deposit
    return {
    }
})();