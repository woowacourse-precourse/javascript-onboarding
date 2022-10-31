function problem3(number) {

  let answer = 0;

  // 정규표현식
  let regex = /3|6|9/g;

  // 문자열이 정규식과 매치되는 부분을 검색
  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(regex) || []).length;
  }

  return answer;
}

module.exports = problem3;
