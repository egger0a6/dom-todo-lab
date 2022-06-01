/*------------------------ Cached Element References--------------------------*/

const inputText = document.querySelector("#inputText");
const subButton = document.querySelector("#submit-button");
const todoList = document.querySelector("#todo-list");
const resetBtn = document.querySelector("#reset-button");


/*------------------------ Event Listeners------------------------------------*/

subButton.addEventListener("click", submit);

resetBtn.addEventListener("click", init);

todoList.addEventListener("click", delListItem);

/*-------------------------------- Functions ---------------------------------*/

function submit(evt) {
  evt.preventDefault();
  let input = inputText.value;
  // only add list element if string is not empty
  if (input) {
    const liElement = document.createElement("li");
    liElement.textContent = input;
    inputText.value = "";
    todoList.appendChild(liElement);
  }
}

function init() {
  inputText.value = "";
  todoList.innerHTML = "";
}

function delListItem(evt) {
  if (!todoList.hasChildNodes()) {
    return;
  }
  const liElement = evt.target.closest("li");
  liElement.remove();
}