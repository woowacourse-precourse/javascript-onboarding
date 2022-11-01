const problem3Util = require('./problem3Util');
function problem3(number) {
  var answer;
  const { getDigitFromNum } = problem3Util;
  try {
    // 제한사항에 맞지 않는 범위라면 Error를 던진다.
    if (number > 10000 || number < 0) {
      throw new Error('number must between(1, 10,000)');
    }

    let count = 0;
    // 숫자를 1씩 증가시켜 가면서 확인한다.
    for (let i = 1; i <= number; i++) {
      // 각 자리 숫자 배열을 얻어, digit 배열을 순회하며 3,6,9 의 개수를 센다
      getDigitFromNum(i).forEach((value) => {
        if ([3, 6, 9].includes(value)) {
          count += 1;
        }
      });
    }
    answer = count;
  } catch {
    answer = -1;
  }
  return answer;
}

module.exports = problem3;
