const loginInput = document.querySelector('#login-form input')
const loginButton = document.querySelector('#login-form button')
function onLofinBtnClick() {
  const username = loginInput.value
  console.log(username)
}

loginButton.addEventListener('click', onLofinBtnClick)
