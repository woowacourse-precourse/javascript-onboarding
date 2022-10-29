// 각 자리 더하는 함수 선언
const sumDigit = (n) => {
  let sum_res = 0;
  while (n > 0) {
    sum_res += n % 10;
    n = parseInt(n / 10);
  }
  return sum_res;
};

// 각 자리 곱하는 함수 선언
const multDigit = (n) => {
  let mult_res = 1;
  while (n > 0) {
    mult_res *= n % 10;
    n = parseInt(n / 10);
  }
  return mult_res;
};

// 문제 해결 함수
function problem1(pobi, crong) {
  // 각 배열의 왼쪽과 오른쪽 구별
  const pobi_left = pobi[0];
  // console.log("pobi_left", pobi_left);
  const pobi_right = pobi[1];
  // console.log("p-r", pobi_right);
  const crong_left = crong[0];
  // console.log("c-l", crong_left);
  const crong_right = crong[1];
  // console.log("c-r", crong_right);

  var answer;
  return answer;
}

module.exports = problem1;
