const clock = document.querySelector('h2#clock')

function getClcok() {
  const date = new Date()
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClcok()
setInterval(getClcok, 1000)
