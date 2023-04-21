const toDoForm = document.getElementById('todo-form')
const toDoinput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

function paintToDo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  li.append(span)
  span.innerText = newTodo
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoinput.value
  toDoinput.value = ''
  paintToDo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
