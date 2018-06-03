function generateAdder(amount){
    return function(x){
        return x + amount;
    }
}

const add5 = generateAdder(5);
console.log(add5(10));

const add10 = generateAdder(10);
console.log(add10(10));