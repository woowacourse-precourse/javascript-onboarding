function problem3(number) {
  var answer = 0;
  var regExp369 = /[369]/g;
  var array369;

  for (var i = 1; i <= number; ++i) {
    if (array369 = String(i).match(regExp369)) {
      answer += array369.length;
    }
  }
  return answer;
}

module.exports = problem3;
