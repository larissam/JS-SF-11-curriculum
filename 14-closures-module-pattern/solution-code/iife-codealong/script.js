// Turn this into an IIFE!
const countDownExpression = function() {
    console.log('count down expression');
    for(let counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}(); 

// Turn this into an IIFE!
(function countDownDeclaration() { 
    console.log('count down declaration');
    for(let counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
})();
