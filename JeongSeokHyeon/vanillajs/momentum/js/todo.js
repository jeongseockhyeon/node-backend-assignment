const toDoForm = document.getElementById('todo-form')
const toDoinput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoinput.value
  toDoinput.value = ''
}

toDoForm.addEventListener('submit', handleToDoSubmit)
