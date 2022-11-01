// 1부터 입력숫자까지 수들중 3,6,9를 찾는 problem3 함수 구현

function problem3(number) {
  let result = 0;
  for (let i = 2; i <= number; i++) {
    result += String(i)
      .split("")
      .map(Number)
      .reduce((prev, cur) => {
        if (cur !== 0 && cur % 3 === 0) {
          return prev + 1;
        } else {
          return prev;
        }
      }, 0);
  }
  return result;
}

module.exports = problem3;
