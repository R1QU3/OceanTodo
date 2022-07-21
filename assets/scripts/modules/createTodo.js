import idGenerator from "./todoIdGenerator.js";
import setInputValidationMessage from "./setInputValidationMessage.js";

export default function createTodo() {
  const taskNameInput = document.getElementById('task_name');
  const submitBtn = document.getElementById('send_item_btn');

  function handleInput(target) {
    return target.validity.valid && target.checkValidity()
  };

  function setTodo(e) {
    e.preventDefault();
    if (handleInput(taskNameInput)) {
      if (window.localStorage) {
        const data = window.localStorage;
        data.setItem(`todo_${idGenerator()}`, JSON.stringify({
          todo_title: taskNameInput.value,
          todo_status: 'uncheck',
          todo_id: idGenerator(),
        }))
        window.location.reload();
      }
    } else {
      setInputValidationMessage(taskNameInput);
    }
  };
  ['click', 'touchstart'].forEach(userEvent => submitBtn.addEventListener(userEvent, setTodo))
}