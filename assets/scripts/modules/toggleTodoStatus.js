export default function toggleTodoStatus() {
  const todoItems = document.querySelectorAll('#todo-list li');

  function toggleStatus() {
    const todo_key = `todo_${this.dataset.todoId}`
    const todo_status = this.dataset.todoStatus;
    const thisData = JSON.parse(window.localStorage.getItem(todo_key));
    const localData = window.localStorage;

    if (todo_status === 'check') {
      thisData.todo_status = 'uncheck';
      localData.setItem(todo_key, JSON.stringify(thisData));
      this.dataset['todoStatus'] = 'uncheck';
    } else if (todo_status === 'uncheck') {
      thisData.todo_status = 'check';
      localData.setItem(todo_key, JSON.stringify(thisData));
      this.dataset['todoStatus'] = 'check';
    }
  }
  todoItems.forEach((todo) => {
    ['click', 'touchstart'].forEach(userEvent => todo.addEventListener(userEvent, toggleStatus));
  })
}