export default function loadLocalTodo() {
  if (window.localStorage) {
    const localData = window.localStorage;
    const todo_list = document.getElementById('todo-list')
    for (let i = 0; i <= localData.length; i++) {
      if (localData[`todo_${i}`]) {
        const data = JSON.parse(localData.getItem(`todo_${i}`))

        const li = document.createElement('li'),
          title = document.createElement('span'),
          icon = document.createElement('i');

        li.setAttribute('data-todo-status', data.todo_status);
        li.setAttribute('data-todo-id', data.todo_id);
        /* li.setAttribute('data-aos', "zoom-in-down"); */
        title.textContent = data.todo_title;

        li.appendChild(title);
        li.appendChild(icon);

        todo_list.appendChild(li)
      }
    }
  }
}