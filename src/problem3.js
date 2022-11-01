function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    var tmp = i;
    while(tmp) {
      if (Math.floor(tmp % 10) === 3 || Math.floor(tmp % 10) === 6 || Math.floor(tmp % 10) === 9) {
        answer++;
      }if (10 <= i <= number) {
        tmp = Math.floor(tmp / 10);
      }
    }
  }  
  return answer;
}

module.exports = problem3;
