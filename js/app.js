/*------------------------ Cached Element References--------------------------*/

const inputText = document.querySelector("#inputText");
const subButton = document.querySelector("#submit-button");
const todoList = document.querySelector("#todo-list");


/*------------------------ Event Listeners------------------------------------*/

subButton.addEventListener("click", submit);

/*-------------------------------- Functions ---------------------------------*/

function submit(evt) {
  const liElement = document.createElement("li");
  liElement.textContent = inputText.value;
  inputText.value = "";
  todoList.appendChild(liElement);
}