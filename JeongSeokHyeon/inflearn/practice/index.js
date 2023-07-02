// const math = require('./math')

// const result = math.sum(1, 2)

// console.log(result)

const fs = require('fs')
// const data = fs.readFileSync('./data.txt', 'utf-8')

const data = fs.readFile('./data.txt', 'utf8', function (err, data) {
  console.log(data)
})
