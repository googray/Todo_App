const containerTodoMaker = document.querySelector(".todo-input");

const containerTodoEdit = document.querySelector(".todo-input .edit");
const containerTodoRow = document.querySelector(".todo-task");

const btnTodo = document.querySelector(".btn-add");
const btnUpdate = document.querySelector(".btn-edit");
const btnRemove = document.querySelector(".delete-icon");
const todoContent = document.querySelector(".todo-content");
const todoField = document.querySelector(".todo-field");
// const tagClose
// const tagEdit

function displayTodo() {
  // containerTodoMaker.innerHTML = "";
  const html = `
           <div class="todo-row">
               <div class="todo-task">sadfgh</div>
               <div class="icons">
                 <svg class="delete-icon"></svg>
                 <svg class="edit-icon"></svg>
               </div>
             </div>
           `;
  document.querySelector(".todo-field").insertAdjacentHTML("beforeend", html);
}

function removeTodo(input) {
  input.parentNode.remove();
}

btnTodo.addEventListener("click", displayTodo);
// btnRemove.addEventListener("click", removeTodo);
