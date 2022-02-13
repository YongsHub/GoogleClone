const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

const TODOSKEY = "toDos";


function savedToDo() { // localStorage에 저장하는 함수
    localStorage.setItem(TODOSKEY, JSON.stringify(toDos));
}

function deleteToDo(event) { // localStorage에서 삭제하는 함수
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => String(item.id) !== li.id); // item의 id와 li.id의 자료형이 같은지 다른지도 확인해야함
    savedToDo();
}

function makeToDo(newTodoObj) { // li요소 만들어서 span과 button 요소 추가한다.
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) { // 제출하는 함수
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    makeToDo(newTodoObj);
    savedToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOSKEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(makeToDo);
}