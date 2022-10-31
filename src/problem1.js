function problem1(pobi, crong) {
  /**
   * 1. 오른쪽 페이지 - 왼쪽 페이지의 값이 1이 아닐 때 예외처리 // -1
   * 2. 2-3 과정을 통해 나오는 가장 큰 수 도출
   * 3. 비교를 통해 result 반환
   */
  let answer;

  // exception handling
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  /**
   * 가장 큰 수를 도출하는 함수
   */
  const findBiggestNumber = (array) => {
    const result = [];
    const baseFunction = (index) => {
      return String(array[index])
        .split("")
        .map((string) => Number(string));
    };
    for (let i = 0; i < 2; i++) {
      result.push(baseFunction(i).reduce((a, b) => a * b));
      result.push(baseFunction(i).reduce((a, b) => a + b));
    }
    return Math.max(...result);
  };

  // 비교를 통해 result 반환
  if (findBiggestNumber(pobi) > findBiggestNumber(crong)) {
    answer = 1;
  } else if (findBiggestNumber(pobi) < findBiggestNumber(crong)) {
    answer = 2;
  } else if (findBiggestNumber(pobi) === findBiggestNumber(crong)) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
