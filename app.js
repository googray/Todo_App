const containerTodoMaker = document.querySelector(".todo-input");

const containerTodoEdit = document.querySelector(".todo-input .edit");
const containerTodoRow = document.querySelector(".todo-task");
const todoApp = document.querySelector(".todo-app");
const btnTodo = document.querySelector(".btn-add");
const update = document.querySelector(".btn-edit");
const todoContent = document.querySelector(".todo-content");
let todoField = document.querySelector(".todo-field");
const input = document.querySelector(".todo-input");
const overLay = document.querySelector("#overlay");
const btnKnow = document.querySelector(".overlay-button");

let todoText;
function displayTodo(e) {
  // containerTodoMaker.innerHTML = "";
  e.preventDefault();

  if (todoText !== input.value) {
    todoText = input.value;
    off();
  } else {
    todoText = input.value;
    on();
  }

  const html = `
           <div class="todo-row">
               <div class="todo-task">${todoText}</div>
               
                 <svg class="delete-icon"></svg>
                 <svg class="edit-icon"></svg>
              
             </div>
           `;
  document.querySelector(".todo-field").insertAdjacentHTML("beforeend", html);
  input.value = "";
}
//
btnTodo.addEventListener("click", displayTodo);

// OVERLAY ON
function on() {
  document.getElementById("overlay").style.display = "block";
}
// OVERLAY OFF
function off() {
  document.getElementById("overlay").style.display = "none";
}

overLay.addEventListener("click", off);
btnKnow.addEventListener("click", off);

const removeRow = document.getElementsByClassName("delete-icon");
const row = document.querySelector(".todo-row");

function deleteRow(e) {
  const item = e.target;
  //DELETE ROW
  if (item.classList[0] === "delete-icon") {
    let todo = item.parentElement;
    todo.remove();
  }

  //CHECKED ROW
  if (item.classList[0] === "todo-task") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }
}
todoApp.addEventListener("click", deleteRow);
