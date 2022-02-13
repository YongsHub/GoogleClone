const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const toDo = document.querySelector("#todo-form");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event); // defaultPrevented : true를 확인할 수 있다.
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    toDo.classList.remove(HIDDEN_CLASS_NAME);
    greeting.innerText = `Hello ${username}`;
}

link.addEventListener("click", handleLinkClick); // JS에게 함수 이름만 주고 알아서 event가 발생할때 마다 실행해준다. 첫 번째 인자에는 여러 정보를 담아준다.

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    // username이 저장되어 있지 않으면,
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //username이 저장되어 있다면,
    paintGreetings();
}
