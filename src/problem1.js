function problem1(pobi, crong) {
  // 각 자리 숫자를 더하거나 곱한 값 중 가장 큰 값 찾기
  function calculate(num) {
    numArr = num.toString().split("");

    const add = numArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    const mul = numArr.reduce((acc, cur) => acc * parseInt(cur), 1);
    return Math.max(add, mul);
  }

  let result;
  const pobiScore = Math.max(...pobi.map((num, index) => calculate(num)));
  const crongScore = Math.max(...crong.map((num, index) => calculate(num)));

  // pobi와 crong의 점수 비교하여 최종 승부 점수 구하기
  if (pobiScore > crongScore) {
    result = 1;
  } else if (pobiScore < crongScore) {
    result = 2;
  } else {
    result = 0;
  }

  return result;
}

module.exports = problem1;
