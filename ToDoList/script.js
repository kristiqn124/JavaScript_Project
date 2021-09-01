"strict";
const inputTask = document.querySelector(".input_task");
const btnSubmit = document.querySelector(".btn_submit");
const listContainer = document.querySelector(".list_container");

listContainer.innerHTML = "";

btnSubmit.addEventListener("click", addTask);
inputTask.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    addTask();
  }
});

function addTask(e) {
  let html = `<div class="task">
  <span class="sp">${inputTask.value}</span>
  <button class="btn_delete">X</button>
    </div>`;
  if (inputTask.value !== "" && inputTask.value.trim()) {
    listContainer.innerHTML += html;
  }

  inputTask.value = "";
  const btnDelete = document.querySelectorAll(".btn_delete");
  deleteTask(btnDelete);
}

function deleteTask(btn) {
  btn.forEach((element) => {
    element.addEventListener("click", function () {
      element.parentElement.remove();
    });
  });
}
