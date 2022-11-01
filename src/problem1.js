// 배열에서 모든 인덱스를 순회하며 각 자리 숫자를 더하거나 곱한 것중 큰 수를 리턴하는 함수
function numberOfDigitArray(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let multiply = 1;
    let sum = 0;
    let digit = arr[i];

    while (digit > 0) {
      sum += digit % 10;
      multiply *= digit % 10;
      digit = Math.floor(digit / 10);
    }

    const DEGIT_MAX = Math.max(sum, multiply);
    if (max < DEGIT_MAX) max = DEGIT_MAX;
  }
  return max;
}

function problem1(pobi, crong) {
  function exceptionCase(arr) {
    // 왼쪽페이지 홀수 혹은 오른쪽페이지 짝수가 아님
    if (arr[0] % 2 === 0 || arr[1] % 2 !== 0) return 1;
    // 바로 앞 장이 아님
    if (arr[0] + 1 !== arr[1]) return 1;
    // 첫 페이지 혹은 마지막페이지를 펼침
    if (arr[1] > 399 || arr[0] < 2) return 1;
    return 0;
  }
  if (exceptionCase(pobi) || exceptionCase(crong)) return -1;

  const POBI_MAX = numberOfDigitArray(pobi);
  const CRONG_MAX = numberOfDigitArray(crong);

  if (POBI_MAX > CRONG_MAX) return 1;
  if (CRONG_MAX > POBI_MAX) return 2;
  return 0;
}

module.exports = problem1;
