// Create a makeCar function
// ---
// Define a function called makeCar() that takes two parameters (model, color),
// makes a new object literal for a car using those params, and returns that object.
// Be sure your function returns the fuel property and the drive and refuel methods 
// that you worked with in the previous exercise.

// Sample car object:
// const camry = {
//     model: 'Toyota Camry',
//     color: 'lime green',
//     fuel: 100,
//     drive: function() {
//         this.fuel--;
//         return 'Vroom!';
//     },
//     refuel: function() {
//         this.fuel = 100;
//     }
// }

function makeCar(model, color){
    const car =  {
        model: model,
        color: color,
        fuel: 100,
        drive: function() {
        this.fuel--;
        return 'vroom!';
        },
        refuel: function() {
        this.fuel = 100;
        }
    };
    return car;
}


const accord = makeCar("Honda Accord", "Blue");
console.log(accord);
