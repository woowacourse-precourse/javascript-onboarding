function problem3(number) {
  let answer = 0;
  const count = /3|6|9/g;

  for(let i = 1; i<= number; i++){
    answer += ((String(i).match(count) || []).length);
  }
  return answer;
}

module.exports = problem3;
