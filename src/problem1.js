/*
### 기능 목록

1. 시작면이나 마지막 면이 나오도록 책을 펼친 경우, -1을 반환한다.
2. 페이지를 정상적으로 펼친 경우,
   2-1. 오른쪽 페이지의 일의 자리가 '0'일때,(예 : 20,30,40..) 왼쪽 페이지의 덧셈, 곱셈이 더 큼으로, 왼쪽 페이지를 선정한다.
   덧셈, 곱셈이 항상 크다.
   2-2. 오른쪽 페이지의 일의 자리가 0이 아닐때, 오른쪽 페이지의 덧셈, 곱셈이 더 큼으로 오른쪽 페이지를 선정한다.
3. 선정한 페이지 숫자의 각 자리수를 더하고, 선정한 페이지 숫자의 각 자리수를 곱한다.
4. 각 자리수를 덧셈, 곱셈한 값을 비교하여 더 큰 값을 점수로 선정한다.
5. 본인의 점수를 비교하여, 승부를 결정한다.
*/

function problem1(pobi, crong) {
  function Between(x, min, max) {
    return x > min && x < max;
  }

  if (Between(pobi[0], 1, 399) && Between(crong[0], 1, 399)) {
  } else answer = -1;
  return answer;
}

module.exports = problem1;
