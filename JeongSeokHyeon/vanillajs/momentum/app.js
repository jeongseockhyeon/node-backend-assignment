// alert('hi')

// console.log(545454)
// console.log("alalala");
// const a = 5
// const b = 2
// const myName = 'jsh'

// let a= 5
// let b =2
// let myName = 'jsh'

// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
// myName = 'jeongseekhyeon'
// console.log('hello' + myName)
// console.log('your new name is' + myName)

// const amIFat = false
// console.log(amIFat)

// const amIFat = null
// let something
// console.log(amIFat)
//null
// console.log(something)
//undefined
// const mon = 'mon'
// const tue = 'tue'
// const wed = 'wed'
// const thu = 'thu'
// const fri = 'fri'
// const sat = 'sat'
// const sun = 'sun'

// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]
// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// const nonsense = [1, 2, 'hello', false, null, true, undefined, 'jsh']

// console.log(daysOfWeek, nonsense)
// console.log(daysOfWeek[4])

// daysOfWeek.push('sun')
// console.log(daysOfWeek)

// const toBuy = ['potato', 'tomato', 'pizza']
// console.log(toBuy[4])

// const player = {
//   name: 'jsh',
//   points: 10,
//   fat: true,
// }
// console.log(player)
// console.log(player.name)
// console.log(player['name'])

// console.log(player)
// player.fat = false
// console.log(player)

// console.log(player)
// player.lastName = 'potato'
// console.log(player)
// player.points = player.points + 15
// console.log(player.points)

// function sayHello(nameOfPerson, age) {
//   console.log('Hellow my name is' + nameOfPerson + "and I'm" + age)
// }

// sayHello('jsh', 24)
// sayHello('nico', 23)
// sayHello('dal', 21)

//NaN = Not a Number
// function minusFive(firstNumver, secondNumber) {
//   console.log(firstNumver + secondNumber)
// }
// function devide(a, b) {
//   console.log(a / b)
// }

// minusFive(8, 60)
// devide(90, 15)

// const player = {
//   name: 'jsh',
//   sayHello: function (otherPersonName) {
//     console.log('hello!' + otherPersonName)
//   },
// }
// console.log(player.name)
// player.sayHello('nico')

//recap

// const a= 5
// const Fat=true
// let Fat = true
// Fat = false

// const a = true
// const a ='true'
// const a = null
// let hello
// console.log(hello)

// const days = [1,2,false,true,null,undefined,'text',me]
// const toBuy = ['potato', 'tomato', 'pizza']
// console.log(toBuy)
// toBuy[2] = 'water'
// console.log(toBuy)
// toBuy.push('meet')
// console.log(toBuy)

// const days = ['mon', 'tue', 'wed']
// const player = {
//   name: 'jsh',
//   age: 24,
// }

// console.log(player, console)
// console.log(player.name)
// player.name = 'jeong'
// console.log(player)
// player.sexy = false
// console.log(player)

// function minusFive(potato) {
//   console.log(potato - 5)
// }

// minusFive(5, 10, 12, 2, 17)
// alert('errrr')

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b)
//   },
//   min: function (a, b) {
//     console.log(a - b)
//   },
//   div: function (a, b) {
//     console.log(a / b)
//   },
//   power: function (a, b) {
//     console.log(a ** b)
//   },
// }

// calculator.add(10, 5)
// calculator.min(10, 5)
// calculator.div(10, 5)
// calculator.power(10, 5)

// const age = 24
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2
// }

// const KrAge = calculateKrAge(age)
// console.log(KrAge)

// const calculator = {
//   add: function (a, b) {
//     return a + b
//   },
//   min: function (a, b) {
//     return a - b
//   },
//   times: function (a, b) {
//     return a * b
//   },
//   div: function (a, b) {
//     return a / b
//   },
//   power: function (a, b) {
//     return a ** b
//   },
// }

// const plusResult = calculator.add(10, 5)
// const minusResult = calculator.min(plusResult, 10)
// const timesResult = calculator.times(10, minusResult)
// const divideResult = calculator.div(timesResult, plusResult)
// const powerResult = calculator.power(divideResult, minusResult)

// const age = prompt('How old are you?')
// console.log(typeof age, typeof parseInt(age))

// console.log(age, parseInt(age))

// const age = parseInt(prompt('How old are you'))
// console.log(isNaN(age))
// if (isNaN(age) || age < 0) {
//   console.log('Please write a Number')
// } else if (age < 18) {
//   console.log('you are too young')
// } else if (age >= 18 && age <= 50) {
//   console.log('You con drink')
// } else if (age > 50 && age <= 80) {
//   console.log('You should exercise')
// } else if (age === 100) {
//   console.log('wow you are wise')
// } else if (age > 80) {
//   console.log('You can do whatever you want')
// }

// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// true && false === false
// false && true === false
// false && false === false

// if ((a && b) || (c && d) || x || y) {
// }

// document.title = 'Hellow! From JS!'

// const title = document.getElementById('title')
// console.dir(title)

// title.innerText = 'Got you'

// console.log(title.id)
// console.log(title.className)

// const title = document.getElementById('something')
// console.log(title.className)

// const hellos = document.getElementsByClassName('hello')
// console.log(hellos)

// const title = document.getElementsByTagName('h1')
// const title = document.getElementsByTagName('h1')
const title = document.querySelector('div.hello:first-child h1')
// title.innerText = 'Hello'
// console.log(title)

// title.style.color = 'blue'
function handleTitleClick() {
  title.style.color = 'red'
}
function handleMouseEnter() {
  title.innerText = 'Mouse is here'
}
function handleMouseLeave() {
  title.innerText = 'Mouse is gone'
}

title.addEventListener('click', handleTitleClick)
title.addEventListener('mouseenter', handleMouseEnter)
title.addEventListener('mouseleave', handleMouseLeave)
