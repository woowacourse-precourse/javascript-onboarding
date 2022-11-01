function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let currentNumber = i;
    while (currentNumber > 0) {
      // 현재 자릿수의 숫자가 3,6,9로 끝날 경우, count 1 증가
      if (
        currentNumber % 10 === 3 ||
        currentNumber % 10 === 6 ||
        currentNumber % 10 === 9
      ) {
        count += 1;
      }
      // 다음 자릿수 검사를 위해 나누기
      currentNumber = Math.floor(currentNumber / 10);
    }
  }
  return count;
}

module.exports = problem3;
