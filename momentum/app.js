const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS_NAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event); // defaultPrevented : true를 확인할 수 있다.
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick); // JS에게 함수 이름만 주고 알아서 event가 발생할때 마다 실행해준다. 첫 번째 인자에는 여러 정보를 담아준다.
