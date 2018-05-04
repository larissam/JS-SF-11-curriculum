/* Create objects for three different monkeys (called monkey1, monkey2, monkey3),
each with the following properties:
* name
* species
* foodsEaten

And the following methods:
* eat(food)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. 
Switch roles after creating the first object, then again after creating the second. 
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).
*/

let monkey1 = {
    name: 'Jim',
    species: 'Rhesus monkey',
    foodsEaten: [],
    introduce: function() {
        console.log('Hi! I\'m ' + monkey1.name + ' the ' + monkey1.species + '! Here\'s what I ate today: ', monkey1.foodsEaten.join(', '));
    },
    eat: function(food) {
        monkey1.foodsEaten.push(food);
    }
};

let monkey2 = {
    name: 'Rafiki',
    species: 'Baboon',
    foodsEaten: [],
    introduce: function() {
        console.log('Hi! I\'m ' + monkey2.name + ' the ' + monkey2.species + '! Here\'s what I ate today: ', monkey2.foodsEaten.join(', '));
    },
    eat: function(food) {
        monkey2.foodsEaten.push(food);
    }
};

let monkey3 = {
    name: 'George',
    species: 'Macaque',
    foodsEaten: [],
    introduce: function() {
        console.log('Hi! I\'m ' + monkey3.name + ' the ' + monkey3.species + '! Here\'s what I ate today: ', monkey3.foodsEaten.join(', '));
    },
    eat: function(food) {
        monkey3.foodsEaten.push(food);
    }
};