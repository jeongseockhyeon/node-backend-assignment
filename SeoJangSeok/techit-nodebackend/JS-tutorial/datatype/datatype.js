/*
자료형

1. 기본형, 단순형, 원시형
- number
- string
- boolean
- undefined
- null
- symbol

2. 참조형, 객체(Object)

*/

// number
// 정수(integer), 실수 구분이 없음

var price = 10000
console.log(price)

// string
var myname = '서장석'
console.log(myname)
var myname2 = '멋사'
console.log(myname2)
// var myname3 = "멋쟁이'; 오류난다.
var myname4 = "'멋쟁이'"
console.log(myname4)
var myname5 = '"사자"' // "\"사자\"" 가능.
console.log(myname5)

// boolean
// 대소문자 구분함. 소문자로만 써야한다. 안 그럼 에러.
var isTrue = true
console.log(isTrue)
var isFalse = false
console.log(isFalse)

// undefined
var a
console.log(a)
