function problem3(number) {
  var answer = 0;
  const regExp369 = /[369]/g;
  let array369;

  for (let i = 1; i <= number; ++i) {
    if (array369 = String(i).match(regExp369)) {
      answer += array369.length;
    }
  }
  return answer;
}

module.exports = problem3;
