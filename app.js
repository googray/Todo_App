const containerTodoMaker = document.querySelector(".todo-input");

const containerTodoEdit = document.querySelector(".todo-input .edit");
const containerTodoRow = document.querySelector(".todo-task");

const btnTodo = document.querySelector(".btn-add");
const update = document.querySelector(".btn-edit");

const todoContent = document.querySelector(".todo-content");
const todoField = document.querySelector(".todo-field");

const input = document.querySelector(".todo-input");
const row = document.querySelector(".todo-row");
// const tagClose
// const tagEdit

function displayTodo(e) {
  // containerTodoMaker.innerHTML = "";
  e.preventDefault();
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

  const remove = document.getElementsByClassName(".delete-icon");
  let i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

btnTodo.addEventListener("click", displayTodo);

function check(e) {
  if (e.target.className === ".todo-row") {
    e.target.classList.toggle("checked");
  }
}
todoField.addEventListener("click", check);

// const remove = document.querySelector(".delete-icon");
// let i;
// for (i = 0; i < remove.length; i++) {
//   remove[i].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";
//   };
// }
