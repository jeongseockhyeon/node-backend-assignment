const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
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
app.get('/list', function (요청, 응답) {
  db.collection('post')
    .find()
    .toArray(function (에러, 결과) {
      console.log(결과)
      응답.render('list.ejs', { posts: 결과 })
    })
})

app.delete('/delete', function (요청, 응답) {
  요청.body._id = parseInt(요청.body._id)
  db.collection('post').deleteOne(요청.body, function (에러, 결과) {
    console.log('삭제완료')
  })
  응답.send('삭제완료')
})

app.post('/add', function (요청, 응답) {
  db.collection('counter').findOne(
    { name: '게시물갯수' },
    function (에러, 결과) {
      var 총게시물갯수 = 결과.totalpost
      db.collection('post').insertOne(
        { _id: 총게시물갯수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date },
        function (에러, 결과) {
          db.collection('counter').updateOne(
            { name: '게시물갯수' },
            { $inc: { totalpost: 1 } },
            function (에러, 결과) {
              if (에러) {
                return console.log('저장 완료')
              }
              응답.send('요청 전송 완료')
            }
          )
        }
      )
    }
  )
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
