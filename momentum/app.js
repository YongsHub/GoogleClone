const calculator = {
    add: function(a, b) {
        return a + b;
    },

    minus: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        return a / b;
    },

    powerOf: function(a, b) {
        return a ** b;
    },

    times: function(a, b) {
        return a * b;
    }
};

calculator.add(5, 1);
calculator.divide(4, 2);
calculator.minus(4, 2);
calculator.powerOf(2, 5);

//const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const plusResult = calculator.add(2, 5);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
console.log(minusResult);
const timeResult = calculator.times(10, minusResult);
console.log(timeResult);
const divideResult = calculator.divide(timeResult, plusResult);
console.log(divideResult);
const powerResult = calculator.powerOf(divideResult, minusResult);
console.log(powerResult);

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("please write a Number"); // condition true
} else if(age < 18){
    console.log("You are too young.");// contdition false
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else {
    console.log("You can drink");
}

