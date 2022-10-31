function problem3(number) {
  const check = ['3', '6', '9'];
  let answer = 0;

  //연산
  for (let i = 1; i <= number; i += 1) {
    //기능목록 1-1 구현
    const num = String(i);
    answer += num.split('').filter(v => check.includes(v)).length;
  }

  return answer;
}

module.exports = problem3;
