let todoliststr = localStorage.getItem('TO-DO List');
let todoList = JSON.parse(todoliststr) || [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem.trim() === '' || todoDate === '') {
    alert("Please enter both task and date.");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  localStorage.setItem('TO-DO List', JSON.stringify(todoList));

  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div class="todo-row">
        <span class="todo-item">${item}</span>
        <span class="todo-date">${dueDate}</span>
        <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
      </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem('TO-DO List', JSON.stringify(todoList));
  displayItems();
}
