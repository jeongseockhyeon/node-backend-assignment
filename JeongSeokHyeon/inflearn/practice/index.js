// const math = require('./math')

// const result = math.sum(1, 2)

// console.log(result)

const fs = require('fs')
const data = fs.readFileSync('./data.txt', 'utf-8')
console.log(data)
