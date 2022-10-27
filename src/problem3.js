function problem3(number) {
  var answer = 0;
  const regex = /3|6|9/g;

  for(let i = 1; i<=number; i++) {
    //match : 정규식과 일치하는 문자열 찾음
    answer += ((String(i).match(regex)||[]).length);
  }

  return answer;
}

module.exports = problem3;