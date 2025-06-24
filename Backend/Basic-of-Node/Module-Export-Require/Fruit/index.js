const Apple = require('./apple');
const Banana = require('./banana');
const Grapes = require('./grapes');

module.exports = {
    Apple,
    Banana,
    Grapes,
    getAllFruits: function() {
        return [Apple, Banana, Grapes];
    },
    getFruitByName: function(name) {
        const fruits = this.getAllFruits();
        return fruits.find(fruit => fruit.name.toLowerCase() === name.toLowerCase());
    }
};