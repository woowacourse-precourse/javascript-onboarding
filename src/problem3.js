function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number; i++){
    answer += getClap(i);
  }
  return answer;
}

module.exports = problem3;
