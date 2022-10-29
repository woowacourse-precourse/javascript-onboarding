function problem3(number) {
  var answer;

  for (let i = 1; i <= number; i++) {
    const numberToString = i.toString();
    const matchArr = numberToString.match(/[3|6|9]/g);
  }
  return answer;
}

module.exports = problem3;
