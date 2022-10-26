const POBIWIN = 1;
const CRONGWIN = 2;
const DRAW = 0;
const ERR = -1;

// 각 자리 숫자를 모두 더해 반환해주는 함수
const calcSum = (num) => {
  const result = (num + "").split("").reduce((acc, cur) => {
    return (acc += parseInt(cur));
  }, 0);
  return result;
};

// 각 자리 숫자를 모두 곱해 반환해주는 함수
const calcMul = (num) => {
  const result = (num + "").split("").reduce((acc, cur) => {
    return (acc *= parseInt(cur));
  }, 1);
  return result;
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
