const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient

app.get('/pet', function (요청, 응답) {
  응답.send('펫용품 쇼핑할 수 있는 페이지입니다')
})
app.get('/beauty', function (요청, 응답) {
  응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다')
})
app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html')
})
app.get('/write', function (요청, 응답) {
  응답.sendFile(__dirname + '/write.html')
})
app.post('/add', function (요청, 응답) {
  console.log(요청.body)
  응답.send('요청 전송 완료')
})

var db

MongoClient.connect(
  'mongodb+srv://jsh:jsh1357924605@cluster0.vavbgct.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp')

    db.collection('post').insertOne(
      { 이름: 'jeong', _id: 100 },
      function (에러, 결과) {
        console.log('저장완료')
      }
    )

    app.listen(8080, function () {
      console.log('listening on 8080')
    })
  }
)
