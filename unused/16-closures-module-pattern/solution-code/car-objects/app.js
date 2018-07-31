// Pretend we want to emulate a car. 

// What kinds of things would we need to keep track of?
// model
// color
// how much gas in tank

// What kinds of things can it do?
// drive (it should reduce the gas in tank)
// refuel (should increase gas in tank)

// Let's make 2 car objects
const camry = {
    model: 'Toyota Camry',
    color: 'lime green',
    fuel: 100,
    drive: function() {
        this.fuel--;
        return 'Vroom!';
    },
    refuel: function() {
        this.fuel = 100;
    }
}
  
// fill out this car!
const civic = {
    model: 'Honda Civic',
    color: 'yellow',
    fuel: 100,
    drive: function() {
        this.fuel--;
        return 'Vroom!';
    },
    refuel: function() {
        this.fuel = 100;
    }
}
  