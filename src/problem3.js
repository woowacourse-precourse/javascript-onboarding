function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    if (String(i).match(/3|6|9/g)) {
      console.log(String(i));
      answer += String(i).match(/3|6|9/g).length;
    }
  }
  return answer;
}

module.exports = problem3;
