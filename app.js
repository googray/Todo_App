const containerTodoMaker = document.querySelector(".todo-input");
// console.log(containerTodoMaker);
const containerTodoEdit = document.querySelector(".todo-input .edit");
const containerTodoRow = document.querySelector(".todo-task");

const btnTodo = document.querySelector(".btn-add");
const btnUpdate = document.querySelector(".btn-edit");
// const tagClose
// const tagEdit

const displayTodo = function (text) {
  containerTodoMaker.innerHTML = "";

  //   todo.forEach(function (tdo, i) {
  const html = `
        <div class="todo-row">
            <div class="todo-task">${text}</div>
            <div class="icons">
              <svg class="delete-icon"></svg>
              <svg class="edit-icon"></svg>
            </div>
          </div>
        `;
  containerTodoMaker.insertAdjacentHTML("afterbegin", html);
  //   });
};

btnTodo.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("DONE");
  const text = containerTodoMaker.value;
  console.log(text);
  displayTodo(text);
  //   updateUI(currentAccount);
});

// const updateUI = function (acc) {
//   displayTodo(acc);
// };
