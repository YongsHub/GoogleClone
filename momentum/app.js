const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },

    minus: function(a, b) {
        console.log(a - b);
    },

    divide: function(a, b){
        console.log(a / b);
    },

    powerOf: function(a, b){
        console.log(a ** b);
    }
};

calculator.add(5, 1);
calculator.divide(4, 2);
calculator.minus(4, 2);
calculator.powerOf(2, 5);