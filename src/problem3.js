function count369(number) {
  let cnt = 0;
  const re = /3|6|9/g;

  // 정규 표현식을 이용해 3,6,9가 들어간 수 검사
  for (let i = 1; i <= number; i++) {
    i = i.toString();
    cnt += (i.match(re) || []).length;
  }

  return cnt;
}

function problem3(number) {
  const answer = count369(number);

  return answer;
}

module.exports = problem3;
