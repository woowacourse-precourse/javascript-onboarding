function problem3(number) {
  let answer = 0;
  for (let i = 1; i < number + 1; i++) {
    if (i.toString().match(/[369]/g)) {
      answer += i.toString().match(/[369]/g).length;
    }
  }
  return answer;
}

module.exports = problem3;
/*
1. answer = 0에서 시작
2. number.includes(3) 이면 ++
*/
