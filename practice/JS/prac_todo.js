const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const TODOITEM_KEY = "todoItem";
let toDoItemArray = [];

// locaStorage에 toDoItemArray를 string으로 파싱한 다음에 저장하기
function saveToDoItem() {
  localStorage.setItem(TODOITEM_KEY, JSON.stringify(toDoItemArray));
}

// 1. 클릭한 버튼의 부모요소를 지운다. (16 ~ 17)
// 2. toDoItemArray.filter로 클릭한 객체 를 제외시키고 배열을 저장한다. (19 ~ 21)
// 3. 업데이트한 배열을 localStorage에 저장한다.
function deleteToDo(event) {
  const toDeleteToDo = event.target.parentElement;
  toDeleteToDo.remove();
  toDoItemArray = toDoItemArray.filter(
    (item) => item.id !== parseInt(toDeleteToDo.id)
  );
  saveToDoItem();
}

// 1. todo의 요소 li,span,button을 생성한다. (27 ~ 29)
// 2. 각 요소의 property를 정의한다 (32 ~ 35)
// 3. 각 요소들을 삽입한다. (38 ~ 40)
function createList(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = todo.id; // filter 함수로 거르기 위한 아이디
  span.innerText = todo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 각 버튼마다 클릭할시 deleteToDo 함수실행

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function onSubmitToDo(event) {
  event.preventDefault();
  const todo = todoInput.value;
  const newToDoObj = {
    text: todo,
    id: Date.now(),
  };
  todoInput.value = "";
  toDoItemArray.push(newToDoObj);
  createList(newToDoObj);
  saveToDoItem();
}

todoForm.addEventListener("submit", onSubmitToDo);

const loadToDoItem = localStorage.getItem(TODOITEM_KEY);

if (loadToDoItem !== null) {
  const parsedToDos = JSON.parse(loadToDoItem);
  toDoItemArray = parsedToDos;
  parsedToDos.forEach(createList);
}
