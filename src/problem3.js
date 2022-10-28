function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    const temp = String(i);
    const regex = /[3|6|9]/g;
    if (regex.test(temp)) {
      answer += temp.match(regex).length;
    }
  }

  return answer;
}

module.exports = problem3;
