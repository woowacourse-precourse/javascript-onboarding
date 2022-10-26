function problem3(number) {
  var answer = 0;
  for(var i = 1; i <= number; i++) {
    if(String(i).includes(3) || String(i).includes(6) || String(i).includes(9)) {
      answer++;
    }
  }
  return answer;
}

module.exports = problem3;
