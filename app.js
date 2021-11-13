const containerTodoMaker = document.querySelector(".todo-input");

const containerTodoEdit = document.querySelector(".todo-input .edit");
const containerTodoRow = document.querySelector(".todo-task");
const toDoApp = document.querySelector(".todo-app");
const btnTodo = document.querySelector(".btn-add");
const update = document.querySelector(".btn-edit");

const todoContent = document.querySelector(".todo-content");
let todoField = document.querySelector(".todo-field");

const input = document.querySelector(".todo-input");

let todoText;
function displayTodo(e) {
  // containerTodoMaker.innerHTML = "";
  e.preventDefault();

  if (todoText !== input.value) {
    todoText = input.value;
  } else {
    console.log("stop");
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

const removeRow = document.getElementsByClassName("delete-icon");

const row = document.querySelector(".todo-row");

toDoApp.addEventListener("click", deleteRow);

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
