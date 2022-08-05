export default function idGenerator() {
  let id = 0;
  const data = window.localStorage;
  if (data.length) {
    const maxId = Object.keys(data).map(function (item) {
      item = JSON.parse(data.getItem(item));
      return item.todo_id
    });
    id = Math.max(...maxId) + 1;
  }
  return id
}