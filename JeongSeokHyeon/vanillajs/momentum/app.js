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
// function plus(firstNumver, secondNumber) {
//   console.log(firstNumver + secondNumber)
// }
// function devide(a, b) {
//   console.log(a / b)
// }

// plus(8, 60)
// devide(90, 15)

const player = {
  name: 'jsh',
  sayHello: function (otherPersonName) {
    console.log('hello!' + otherPersonName)
  },
}
console.log(player.name)
player.sayHello('nico')
