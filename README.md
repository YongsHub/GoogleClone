# GoogleClone

> HTML5 CSS, Javascript에 대한 전반적인 이해 HTML파일이 CSS파일과 Javascript파일을 가져오는 것임. 자바 스크립트 문법 ES6 공부

- Javascript는 위에서 아래로 실행되는 것을 알자!

### 📌 const 키워드와 let 키워드의 차이를 알자

- const는 상수를 의미 즉, 값이 바뀌지 않음 let은 변수로 활용할 수 있다. 따라서 variable 값이 바뀌게 하고 싶지 않을때 const를 활용, 바뀌게 하고 싶을 때는 let 키워드를 활용하면 된다. (var은 쓰지 말 것!)

* 많은 사람들이 const를 base로 쓰고 꼭 필요한 부분만 let을 이용한다.

### 📌 배열과 Object 및 Property, 함수 기본 예제

```
array = []
array.push() // 삽입
array[1] // 참조

//Object
const player = {
    name: "Taeyong",
    age: 25,
    sayHello: function(otherPersonName){
        console.log("nice to meet you" + otherPersonName);
    },
}

function sayHello(name, age){
    console.log(name, "nice to meet you my age is " + age);
}
```
