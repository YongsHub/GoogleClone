# GoogleClone

> HTML5 CSS, Javascript에 대한 전반적인 이해 HTML파일이 CSS파일과 Javascript파일을 가져오는 것임. 자바 스크립트 문법 ES6 공부

- Javascript는 위에서 아래로 실행되는 것을 알자!

### 📌 const 키워드와 let 키워드의 차이를 알자

- const는 상수를 의미 즉, 값이 바뀌지 않음 let은 변수로 활용할 수 있다. 따라서 variable 값이 바뀌게 하고 싶지 않을때 const를 활용, 바뀌게 하고 싶을 때는 let 키워드를 활용하면 된다. (var은 쓰지 말 것!)

* 많은 사람들이 const를 base로 쓰고 꼭 필요한 부분만 let을 이용한다.
* undefined와 null 의 의미를 이해하기

### 📌 배열과 Object 및 Property, 함수 기본 예제

```
array = [] // 배열에는 원하는 모든 데이터 타입이 들어갈 수 있다.
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

- isNaN 함수 number가 아니면 return true
- 조건문 활용

## 📌 자바 스크립트는 HTML elements 들과 상호 작용할 수 있다.

> Javascript를 통해 변경하고 읽을 수 있다. console에 document를 입력하면, 작성한 HTML을 가져올 수 있다. document는 다앙하고 많은 property들을 가지고 있는 Object이다. -> console.dir(document)를 통해 property들을 확인해 볼 수 있다. document속성 중 title이 존재하는데, index.html에서 작성한 title과 맞는지 확인해 볼 수 있다. -> 이것은 자바스크립트 관점에서 document 객체로 확인하는 것이다. -> document.title

> app.js에서 HTML을 접근하기 위한 document를 사용할 수 있는 이유는 HTML이 app.js를 load하기 때문에 존재하는 것이다.

> querySelector() -> css selector 처럼 요소를 가져올 수 있다. 예를 들어, document.querySelector(".hello h1"); hello클래스 내 h1 요소를 가져오는 것이다. 쉽게 정리하자면 querySelector는 CSS selector를 사용하여 검색할 수 있다.

### 📌 listen 하고 싶은 event 찾는 방법

- Ex) h1 html element mdn(mozilla developer network)에 검색을 해보는 것이다. Javascript element 는 Web APIs 문장을 포함한 링크를 통해 확인하면 된다.
