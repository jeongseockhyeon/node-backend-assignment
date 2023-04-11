$(document).ready(function () {
  $('#calculate').click(function () {
    var mdate = $('#birth_date').val().toString();
    var yearThen = parseInt(mdate.substring(0, 4), 10);
    var monthThen = parseInt(mdate.substring(5, 7), 10);
    var dayThen = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() == birthday.getDate()
    ) {
      alert('생일 축하해요!!!');
    }

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
      $('#exact_age').text('생일을 입력하세요');
    } else {
      $('#exact_age').html(
        '태어난 지<br/><span id="age">' +
          year_age +
          ' 년 ' +
          month_age +
          ' 개월 ' +
          day_age +
          ' 일</span> 지났습니다.'
      );
    }
  });
});
