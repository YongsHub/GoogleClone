console.log(54545435);
console.log("Hello");

const a = 5;
const b = 2; // const는 값을 바꾸지 않을 때 -> 상수 키워드를 의미한다.

let myName = "taeyong";
const veryLongVariableName =  "kimtaeyong";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" , myName);

myName = "kim taeyong";

console.log("my new name is " + myName);

const amIFat = null; // 말 그대로 아무것도 없다는 뜻 아무것도 없는 상태 -> 의도적으로 아무것도 없다는 것을 표현
const check = true;
console.log(amIFat); // true or false 예를 들어 로그인, 웹사이트 로딩, 등등
let something; //  undefined를 의미한다. variable은 존제하지만 undefined


// 배열에 대해 알아보자 Array -> 하나의 variable에 list를 가질 수 있다.

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to arrray

daysOfWeek.push("sund"); // 요소 추가하는 방법
console.log(daysOfWeek);

// object 만들기


const player = { // object에 접근할 때 : 활용 property를 추가하여 의미하는 바를 정해준다.
    name : "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
player.lastName = "Kim";
console.log(player);

function sayHello(){
    console.log("Hello my name is taeyong");
}

sayHello();
