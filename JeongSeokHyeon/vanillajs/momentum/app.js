const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

const link = document.querySelector('a')
function onLoginSibmit(event) {
  event.preventDefault()
  console.log(loginInput.value)
}
function handleLinkClick(event) {
  event.preventDefault()
  console.log(event)
}
loginForm.addEventListener('submit', onLoginSibmit)
link.addEventListener('click', handleLinkClick)
