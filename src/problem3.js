function problem3(number) {
  /**
   * 1. number까지 들어있는 배열 생성 number: 5 -> [1, 2, 3, 4, 5]
   * 2. 숫자를 문자로 변환한 후 각 자리별 문자로 분해 13 -> [1, 3]
   * 3. 각각 숫자를 3으로 나눴을 때 나머지가 0이 되는 요소 -> 1 / 나머지 : 0 [1, 3] -> [0, 1]
   * 4. 0은 3으로 나누어도 나머지가 0이므로 0일 때는 그대로 놔둠
   * 5. 이중 배열 속 합을 구해 맵핑하고 배열의 합을 구해 결과 반환
   */
  const countArray = [];
  let count = 0;
  for (let i = 1; i <= number; i++) {
    countArray.push(String(i).split(""));
  }
  countArray.flat().map((number) => {
    (Number(number) !== 0 && Number(number) % 3) === 0 && count++;
  });

  return count;
}

module.exports = problem3;
