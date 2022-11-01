function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    n = String(i);
    for (let j = 0; j < n.length; j++) {
      if (n[j] == '3' || n[j] == '6' || n[j] == '9') {
        answer += 1;
      }
    }
  }
  //console.log(answer);
  return answer;
}
//problem3(13)
module.exports = problem3;
