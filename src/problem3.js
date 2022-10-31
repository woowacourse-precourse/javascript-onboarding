function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    //'3', '6', '9' 가 존재하면 '-' 로 변경하기
    const word = String(i).replaceAll('3','-').replaceAll('6','-').replaceAll('9','-');
    for (let str of word) {
      // '-' 의 갯수 세기
      if (str === '-') {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
