const loginInput = document.querySelector('#login-form input')
const loginButton = document.querySelector('#login-form button')
function onLofinBtnClick() {
  console.log('hello', loginInput.value)
  console.log('click!')
}

loginButton.addEventListener('click', onLofinBtnClick)
