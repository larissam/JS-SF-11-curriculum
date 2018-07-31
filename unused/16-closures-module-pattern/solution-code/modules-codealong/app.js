// Let's make a bank module that has a set amount of reserves
// The bank allows you to withdraw and to deposit

const bankModule = (function(){
    // the bank has a set amount of reserves
    let reserves = 1000000;

    // you can withdraw and deposit
    return {
        withdraw: function(amount) {
            if(reserves > amount) {
                reserves -= amount;
                console.log('Here is your ' + amount);
            } else {
                console.log('Sorry, we cannot complete your transaction at this time');
            }
        },

        deposit: function(amount) {
            reserves += amount;
            console.log('Deposited ' + amount);
        }
    }
})();