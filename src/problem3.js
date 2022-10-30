function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let arr = String(i).match(/[369]/g);
    if (arr) answer += arr.length;
  }
  return answer;
}

module.exports = problem3;
