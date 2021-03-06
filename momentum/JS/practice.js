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

if(isNaN(age) || age < 0){
    console.log("please write a real positive Number"); // condition true
} else if(age < 18){
    console.log("You are too young.");// contdition false
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if (age === 100){
    console.log("wow you are wise");
} else {
    console.log("You can't drink");
}

const h1 = document.querySelector(".Hello:first-child h1"); // Returns the first element

function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseOn(){
    h1.innerText = "Mouse is on here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD!");
}
console.dir(h1); // title에 대한 property들을 확인하기 위해서
h1.addEventListener("click", handleTitleClick); // 괄호는 만들지 않는다. 유저가 click할 경우에 자바스크립트가 실행시켜줌
h1.addEventListener("mouseenter", handleMouseOn);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

