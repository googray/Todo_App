const containerTodoRow = document.querySelector(".todo-input");
console.log(containerTodoRow);

const btnTodo = document.querySelector(".btn-add");
const todo = containerTodoRow.value;
console.log(todo);

const displayTodo = function (todo) {
  containerTodoRow.innerHTML = "";

  //   todo.forEach(function (tdo, i) {
  const html = `
        <div class="todo-row">
            <div class="todo-task">QWERTYU</div>
            <div class="icons">
              <svg class="delete-icon"></svg>
              <svg class="edit-icon"></svg>
            </div>
          </div>
        `;
  containerTodoRow.insertAdjacentHTML("afterbegin", html);
  //   });
};

btnTodo.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("DONE");
  displayTodo();
  //   updateUI(currentAccount);
});

// const updateUI = function (acc) {
//   displayTodo(acc);
// };
