// 각 자리 더하는 함수 선언
const sumDigit = (n) => {
  let sum_res = 0;
  while (n > 0) {
    sum_res += n % 10;
    n = parseInt(n / 10);
  }
  return sum_res;
};

// 문제 해결 함수
function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
